---
title: 'Od czego zaczynam naukę Jmeter'
date: 2020-10-18 22:00:00
author: 'Ela Szulc'
image: ../../images/coding3.jpg
tags:
- jmeter
---

Zastanawialiście się kiedyś nad testami wydajnościowymi swojej aplikacji? Jaka powinna być właściwa wydajność stron internetowych bądź większych serwisów?
Otóz odpowiedź nie jest niestety taka prosta. Przyjmijmy, ze akceptowana granica czasu odpowiedzi serwera wynosi ok. 3s, przy sporym obciązeniu. Ale jak osiągnąć taką sytuację? Jak to mozna sprawdzić?
Wyobrazam sobie, ze istnieją jeszcze zespoły, które wciąz przeprowadzają testy wydajnościowe w sposób bardzo powiedzmy sobie prosty. Umawiają się, ze wszyscy wejdą o określonej godzinie na stronę i w ten sposób zbiorą pewne dane na temat wydajności. Oczywiście to absurd.
W takich sytuacjach z pomocą przychodzi nam Jmeter - jedno z najbardziej popularnych narzędzi do testów wydajnościowych. Oprócz Jmetera mamy mna rynku kilku równie interesujących rywali, jednak statystyki mówią, ze Jmeter nadal pozostaje "królem" testów wydajnościowych.
Aby przeprowadzić pierwszy test mozna wykorzystać stronę : http://automationpractice.com/ i przeprowadzić test wydajnościowy strony głównej.
Kroki do wykonania pierwszego testu:
1. Ściągnięcie paczki Jmetera
2. Ściągnięcie paczki plugin managera Jmetera (Przyda się w przyszłości :) )
3. Otwarcie paczki ( ściezka bin/jmeter.sh dla Linux/Mac)
4. Stworzenie wątku (klikamy prawym przyciskiem myszy na Test Plan -> Add -> Threads -> Thread Group)
5. Dodanie Samplera do wątpku ( prawym przyciskiem myszy na Thread Group -> Add -> Sampler -> HTTP Request)
6. Dodanie name HTTP Requestu ( np. metoda + ścieka + funkcja, przykład : GET (index.php) Wyświeltanie strony głównej)
7. Dodanie Serwer Name od IP, HTTP request i Path
8. Dodanie Listenera (klikamy prawym przyciskiem na Sampler -> Add-> Listener -> View Results Tree)
9. Klikamy Start (zielona strzałka w głównym menu Jmetera)
10, Obserwujemy wyniki :)

To by było na tyle. Jak widać nic trudnego :)