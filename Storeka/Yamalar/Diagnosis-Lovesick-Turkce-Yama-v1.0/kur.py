#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Diagnosis Lovesick Türkçe Yama kurulum betiği.

Oyunun kendi dosyalarını dağıtmamak için, yamanın gerektirdiği küçük değişiklikleri
oyuncunun kendi bilgisayarındaki dosyalara uygular. Değiştirdiği her dosyanın
yedeğini ".orijinal" uzantısıyla alır.

Kullanım:   python3 kur.py            (kur)
            python3 kur.py --geri-al  (orijinal dosyaları geri getir)
"""
import os
import re
import sys
import shutil

KOK = os.path.dirname(os.path.abspath(__file__))
OYUN = os.path.join(KOK, "game")

# Çevrilebilir hâle getirilecek kod içi metinler: _("...") ile sarılır.
KALIP = re.compile(r'(\$ intro_message = |renpy\.input\(|renpy\.notify\()"((?:[^"\\]|\\.)*)"')
HIKAYE = ["story/Prologue.rpy", "story/chapter1.rpy", "story/room.rpy"]
EKRAN = "screens.rpy"
DIL_ISARETI = 'label "Language / Dil"'
ANKRAJ = re.compile(
    r'^( *)textbutton _\("Transitions"\) action InvertSelected\(Preference\("transitions", "toggle"\)\)(\r?\n)',
    re.M,
)


def oku(yol):
    with open(yol, encoding="utf-8", newline="") as f:
        return f.read()


def yaz(yol, metin):
    with open(yol, "w", encoding="utf-8", newline="") as f:
        f.write(metin)


def yedekle(yol):
    yedek = yol + ".orijinal"
    if not os.path.exists(yedek):
        shutil.copyfile(yol, yedek)


def derlenmisi_sil(yol):
    # Ren'Py, .rpy değişince .rpyc dosyasını kendisi yeniden üretir.
    rpyc = yol + "c"
    if os.path.exists(rpyc):
        os.remove(rpyc)


def hikaye_yamala(goreli):
    yol = os.path.join(OYUN, goreli)
    if not os.path.exists(yol):
        print("  [atlandı] bulunamadı:", goreli)
        return 0
    metin = oku(yol)
    sayac = [0]

    def degistir(m):
        sayac[0] += 1
        return '%s_("%s")' % (m.group(1), m.group(2))

    yeni = KALIP.sub(degistir, metin)
    if sayac[0] == 0:
        print("  [değişiklik yok]", goreli)
        return 0
    yedekle(yol)
    yaz(yol, yeni)
    derlenmisi_sil(yol)
    print("  [yamalandı] %s (%d metin)" % (goreli, sayac[0]))
    return sayac[0]


def ekran_yamala():
    yol = os.path.join(OYUN, EKRAN)
    if not os.path.exists(yol):
        print("  [uyarı] screens.rpy bulunamadı, dil düğmesi eklenemedi.")
        return False
    metin = oku(yol)
    if DIL_ISARETI in metin:
        print("  [zaten yamalı] screens.rpy")
        return True
    m = ANKRAJ.search(metin)
    if not m:
        print("  [uyarı] screens.rpy beklenen biçimde değil (farklı oyun sürümü olabilir).")
        print("          Dil düğmesi eklenmedi; oyun dilini elle Türkçe yapman gerekebilir.")
        return False
    girinti, nl = m.group(1), m.group(2)
    ust = girinti[:-4] if len(girinti) >= 4 else ""
    blok = (
        nl
        + ust + "vbox:" + nl
        + ust + "    style_prefix \"radio\"" + nl
        + ust + "    label \"Language / Dil\"" + nl
        + ust + "    textbutton \"English\" action Language(None)" + nl
        + ust + "    textbutton \"Türkçe\" action Language(\"turkish\")" + nl
    )
    yeni = metin[: m.end()] + blok + metin[m.end():]
    yedekle(yol)
    yaz(yol, yeni)
    derlenmisi_sil(yol)
    print("  [yamalandı] screens.rpy (dil düğmesi eklendi)")
    return True


def kur():
    if not os.path.isdir(OYUN):
        print("HATA: 'game' klasörü bulunamadı. Bu dosyayı oyunun ana klasörüne (game klasörünün yanına) koy.")
        return 1
    if not os.path.isdir(os.path.join(OYUN, "tl", "turkish")):
        print("HATA: game/tl/turkish klasörü yok. Yama zip'ini oyun klasörüne açtığından emin ol.")
        return 1
    print("Türkçe yama kuruluyor...")
    toplam = sum(hikaye_yamala(g) for g in HIKAYE)
    ekran_yamala()
    print("Bitti. Oyunu başlat; Ayarlar'dan (Preferences) 'Language / Dil' bölümünde Türkçe'yi seçebilirsin.")
    zaten = any(os.path.exists(os.path.join(OYUN, g) + ".orijinal") for g in HIKAYE)
    if toplam == 0 and not zaten:
        print("Not: hiçbir hikâye dosyasında yamalanacak metin bulunmadı. Bu yama oyunun 1.1 sürümü içindir.")
    return 0


def geri_al():
    print("Orijinal dosyalar geri getiriliyor...")
    bulundu = False
    for goreli in HIKAYE + [EKRAN]:
        yol = os.path.join(OYUN, goreli)
        yedek = yol + ".orijinal"
        if os.path.exists(yedek):
            shutil.copyfile(yedek, yol)
            os.remove(yedek)
            derlenmisi_sil(yol)
            print("  [geri alındı]", goreli)
            bulundu = True
    if not bulundu:
        print("  Geri alınacak yedek bulunamadı.")
    print("Yamayı tamamen kaldırmak için game/tl/turkish klasörünü ve game/turkce_ayar.rpy dosyasını da sil.")
    return 0


if __name__ == "__main__":
    if "--geri-al" in sys.argv:
        sys.exit(geri_al())
    sys.exit(kur())
