# Wood & Glass — strona statyczna

Gotowa, responsywna strona typu one-page w czystym HTML/CSS/JS.

## Pliki
- `index.html` — treść, SEO, Open Graph i dane strukturalne schema.org
- `css/styles.css` — responsywny layout i animacje
- `js/main.js` — menu mobilne, lightbox galerii, animacje i formularz mailto
- `assets/images/` — zoptymalizowane zdjęcia WebP
- `robots.txt`, `sitemap.xml` — podstawy SEO technicznego

## Publikacja
Wgraj cały katalog na hosting tak, aby `index.html` był w katalogu głównym domeny `woodandglass.pl`.

## Ważne przed publikacją
1. W treści przekazano numer `506-958-93`, który ma 8 cyfr. Polski numer komórkowy standardowo ma 9 cyfr — warto go zweryfikować i poprawić w `index.html`.
2. Adres e-mail został użyty dokładnie w formie przekazanej w treści: `e-mail-biuro@woodandglass.pl`. Jeśli właściwy adres to np. `biuro@woodandglass.pl`, zmień go w `index.html` oraz `js/main.js`.
3. Formularz nie wysyła danych na serwer — otwiera program pocztowy użytkownika. Do prawdziwego formularza online potrzebny jest backend/API lub usługa formularzowa.
4. Po wdrożeniu warto dodać Google Search Console i wygenerować podgląd Open Graph z docelowej domeny.
