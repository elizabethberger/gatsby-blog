---
title: 'Selenium - geneza'
date: 2020-04-01 12:00:00
author: 'Ela Szulc'
image: ../../images/code1.jpg
tags:
- Selenium
- tutorial
---

Moje doświadczenia z Selenium są zerowe na tym etapie. Rozpoczynam naukę jednego z najbardziej popularnych narzędzi do testowania automatycznego - dlaczego? Skąd ten pomysł. Odpowiedź jest prosta. Z ciekawości. Jestem zwyczajnie ciekawa potencjału tego narzędzia, z którego korzysta wciąz mnóstwo firm.

Kilka ciekawostek na temat Selenium :

1. Został pierwotnie opracowany przez Jasona Hugginsa w 2004

2. Składa się z kilku komponentów, z których każdy pełni określoną rolę we wspomaganiu rozwoju automatyzacji testów aplikacji internetowych.

3. Selenium IDE to kompletne zintegrowane środowisko programistyczne (IDE) do testów Selenium. Jest zaimplementowany jako dodatek do przeglądarki Firefox i jako rozszerzenie przeglądarki Chrome. Pozwala na nagrywanie, edycję i debugowanie

4. Selenium WebDriver jest następcą Selenium RC. Selenium WebDriver akceptuje polecenia (wysyłane w języku Selenese lub przez Client API) i wysyła je do przeglądarki. Jest to realizowane za pośrednictwem sterownika przeglądarki specyficznego dla przeglądarki, który wysyła polecenia do przeglądarki i pobiera wyniki.

5. Selenium Remote Control (RC) to serwer napisany w Javie, który przyjmuje polecenia dla przeglądarki przez HTTP. RC umożliwia pisanie testów automatycznych dla aplikacji webowej w dowolnym języku programowania, co pozwala na lepszą integrację Selenium z istniejącymi frameworkami do testów jednostkowych. Aby ułatwić pisanie testów, projekt Selenium dostarcza obecnie sterowniki klienckie dla PHP, Python, Ruby, .NET, Perl i Java. Sterownik Java może być również używany z JavaScriptem (przez silnik Rhino). Do uruchomienia testu html potrzebna jest instancja serwera Selenium RC - co oznacza, że ​​port powinien być inny dla każdego równoległego uruchomienia.

6. Selenium Grid to serwer, który umożliwia testom korzystanie z instancji przeglądarek internetowych działających na zdalnych maszynach. W przypadku Selenium Grid jeden serwer działa jako centralny hub. Testy kontaktują się z centrum, aby uzyskać dostęp do wystąpień przeglądarki. W centrum znajduje się lista serwerów, które zapewniają dostęp do instancji przeglądarki (węzły WebDriver) i umożliwiają testom korzystanie z tych instancji. Selenium Grid umożliwia równoległe uruchamianie testów na wielu komputerach i centralne zarządzanie różnymi wersjami przeglądarek i konfiguracjami przeglądarek (zamiast w każdym indywidualnym teście).


Na początek warto zapamiętać tyle! :)