function Form() {

    const html = `
        <!-- Modal polityki prywatności -->
        <div class="privacy-modal-overlay" id="privacyModal" role="dialog" aria-modal="true" aria-labelledby="privacyModalTitle">
            <div class="privacy-modal">
                <button class="privacy-modal-close" id="privacyModalClose" aria-label="Zamknij">&times;</button>
                <div class="privacy-modal-content">
                    <h2 id="privacyModalTitle">Polityka Prywatności</h2>

                    <h3>1. Administrator danych</h3>
                    <p>Administratorem danych osobowych jest <strong>Salon Obsession Monika Molenda</strong> ul. Bohaterów Getta 24 lok 4, 26-900 Kozienice, NIP: 8121814059, REGON: 365937706, zwany dalej „Administratorem".</p>
                    <p>Administrator dokłada szczególnej staranności w celu ochrony prywatności użytkowników oraz bezpieczeństwa przetwarzanych danych osobowych.</p>

                    <h3>2. Zakres przetwarzanych danych</h3>
                    <p>Strona internetowa umożliwia kontakt z Administratorem za pośrednictwem formularza kontaktowego. Podanie danych jest dobrowolne, lecz niezbędne do przesłania zapytania.</p>
                    <p>Zakres przetwarzanych danych może obejmować:</p>
                    <ul>
                        <li>imię i nazwisko,</li>
                        <li>adres e-mail,</li>
                        <li>treść wiadomości.</li>
                    </ul>

                    <h3>3. Sposób i cel przetwarzania danych</h3>
                    <p>Formularz kontaktowy wykorzystuje zewnętrzną usługę FormSubmit, która umożliwia techniczne przekazanie treści formularza bezpośrednio na adres e-mail Administratora.</p>
                    <p>Dane osobowe:</p>
                    <ul>
                        <li>nie są zapisywane ani przechowywane na serwerach strony internetowej,</li>
                        <li>nie są przetwarzane w sposób zautomatyzowany ani profilowane,</li>
                        <li>są wykorzystywane wyłącznie w celu udzielenia odpowiedzi na przesłane zapytanie.</li>
                    </ul>

                    <h3>4. Podstawa prawna przetwarzania</h3>
                    <p>Dane osobowe przetwarzane są na podstawie:</p>
                    <ul>
                        <li>art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO), tj. zgody użytkownika wyrażonej poprzez dobrowolne przesłanie formularza kontaktowego.</li>
                    </ul>

                    <h3>5. Odbiorcy danych</h3>
                    <p>Odbiorcą danych osobowych jest dostawca usługi FormSubmit, który realizuje obsługę techniczną przesyłania formularza.</p>
                    <p>Administrator nie przekazuje danych osobowych innym podmiotom ani nie wykorzystuje ich do celów marketingowych.</p>

                    <h3>6. Okres przetwarzania danych</h3>
                    <p>Dane osobowe są przetwarzane wyłącznie przez okres niezbędny do realizacji celu, jakim jest obsługa zapytania oraz prowadzenie korespondencji z użytkownikiem. Administrator nie prowadzi systematycznego przechowywania ani archiwizacji danych przesłanych za pośrednictwem formularza.</p>

                    <h3>7. Prawa osób, których dane dotyczą</h3>
                    <p>Osobie, której dane dotyczą, przysługuje prawo do:</p>
                    <ul>
                        <li>dostępu do treści swoich danych,</li>
                        <li>ich sprostowania,</li>
                        <li>usunięcia danych,</li>
                        <li>ograniczenia przetwarzania,</li>
                        <li>cofnięcia zgody w dowolnym momencie.</li>
                    </ul>
                    <p>W celu realizacji powyższych praw należy skontaktować się z Administratorem.</p>

                    <h3>8. Pliki cookies</h3>
                    <p>Strona internetowa nie wykorzystuje plików cookies do przetwarzania danych osobowych ani do celów analitycznych lub marketingowych.</p>

                    <h3>9. Zmiany polityki prywatności</h3>
                    <p>Administrator zastrzega sobie prawo do wprowadzenia zmian w niniejszej Polityce Prywatności w przypadku zmiany przepisów prawa lub sposobu funkcjonowania strony internetowej.</p>
                </div>
            </div>
        </div>

        <section class="form-main-container" id="contact">
            <p class="form-title">
                Zapisz się do mnie!
            </p>
            <div class="form-container">
                <form class="form-form" id="contactForm" action="https://formsubmit.co/k_kalbarczyk@o2.pl" method="POST" target="_blank">
                <!-- Ukryte pola konfiguracyjne FormSubmit -->
                    <input type="hidden" name="_subject" value="Nowe zgłoszenie - zapis na zabieg">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="_next" value="https://twoja-strona.pl/Thanks.html">
                    
                    <!-- Pola formularza -->
                    <input type="text" name="Imie" placeholder="Imię i nazwisko" required>
                    
                    <input type="tel" name="Telefon" placeholder="Numer telefonu" required>
                    
                    <input type="text" name="Data" placeholder="Preferowana data (np. 25.02.2026)">
                    
                    <select name="Zabieg" required>
                      <option value="">Wybierz rodzaj zabiegu</option>
                      
                      <optgroup label="Zabiegi na twarz">
                        <option value="Twarz - Peeling">Peeling</option>
                        <option value="Twarz - Mezoterapia">Mezoterapia</option>
                        <option value="Twarz - Oczyszczanie">Oczyszczanie</option>
                      </optgroup>
                      
                      <optgroup label="Zabiegi na ciało">
                        <option value="Ciało - Masaż relaksacyjny">Masaż relaksacyjny</option>
                        <option value="Ciało - Masaż leczniczy">Masaż leczniczy</option>
                        <option value="Ciało - Depilacja">Depilacja</option>
                      </optgroup>
                      
                      <optgroup label="Zabiegi specjalistyczne">
                        <option value="Specjalistyczny - Mezoterapia igłowa">Mezoterapia igłowa</option>
                        <option value="Specjalistyczny - Lipoliza">Lipoliza</option>
                        <option value="Specjalistyczny - Karboksyterapia">Karboksyterapia</option>
                      </optgroup>
                    </select>
                    
                    <textarea name="Opis zabiegu" rows="4" placeholder="Opis zabiegu"></textarea>
                    <textarea name="Dodatkowe uwagi" rows="4" placeholder="Dodatkowe uwagi (opcjonalnie)"></textarea>
                    
                    <!-- Zgoda RODO -->
                    <div class="checkbox-group">
                      <input type="checkbox" class="input-RODO" name="rodo" id="rodo" required>
                      <label for="rodo">
                        Zgadzam się na przetwarzanie moich danych osobowych w celu realizacji zapisu na zabieg. 
                        Zapoznałem/am się z <a href="/polityka-prywatnosci.html" id="privacyLink">polityką prywatności</a>.
                      </label>
                    </div>
                    
                    <button type="submit">Wyślij zgłoszenie</button>
                </form>
                <div class="form-separator">
                    <div class="form-separator-text">LUB</div>
                </div>
                <div class="form-other">
                    <p class="form-other-title">Zadzwoń do mnie, napisz SMS lub wyślij E-mail</p>
                    <div class="form-other-description">
                        <p class="form-other-weighted">Telefon: </p>
                        <p class="form-other-simple">667 911 466</p>
                        <p class="form-other-weighted">E-mail: </p>
                        <p class="form-other-simple">XXXXXXXXXXXXX</p>
                    </div>
                    
                </div>
            </div>
                
            
            
        </section>
    `;

    setTimeout(() => {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                if (confirm('Czy na pewno chcesz wysłać formularz?')) {
                    form.submit();
                } else {
                    alert('Formularz nie został wysłany');
                }
            });
        }

        const privacyLink = document.getElementById('privacyLink');
        const privacyModal = document.getElementById('privacyModal');
        const privacyModalClose = document.getElementById('privacyModalClose');

        if (privacyLink && privacyModal) {
            privacyLink.addEventListener('click', function(e) {
                e.preventDefault();
                privacyModal.classList.add('privacy-modal-overlay--visible');
                document.body.style.overflow = 'hidden';
            });

            privacyModalClose.addEventListener('click', function() {
                privacyModal.classList.remove('privacy-modal-overlay--visible');
                document.body.style.overflow = '';
            });

            privacyModal.addEventListener('click', function(e) {
                if (e.target === privacyModal) {
                    privacyModal.classList.remove('privacy-modal-overlay--visible');
                    document.body.style.overflow = '';
                }
            });

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && privacyModal.classList.contains('privacy-modal-overlay--visible')) {
                    privacyModal.classList.remove('privacy-modal-overlay--visible');
                    document.body.style.overflow = '';
                }
            });
        }
    }, 0);
    return html;
}
export default Form;