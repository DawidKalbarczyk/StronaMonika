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
                <form class="form-form" id="contactForm" action="https://formsubmit.co/obsession.kosmetologia@gmail.com" method="POST" target="_blank">
                <!-- Ukryte pola konfiguracyjne FormSubmit -->
                    <input type="hidden" name="_subject" value="Nowe zgłoszenie - zapis na zabieg">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="_next" value="https://twoja-strona.pl/Thanks.html">
                    
                    <!-- Pola formularza -->
                    <input type="text" name="Imie" placeholder="Imię i nazwisko" required>
                    
                    <input type="tel" name="Telefon" placeholder="Numer telefonu" required>
                    
                    <input type="text" name="Data" placeholder="Preferowana data (np. 25.02.2026)">
                    
                    <div class="custom-select-wrapper" id="treatmentSelectWrapper">
                        <!-- Hidden native select for form validation/submission -->
                        <select name="Zabieg" required id="treatmentSelectHidden" class="native-select-hidden" tabindex="-1" aria-hidden="true">
                            <option value="">Wybierz rodzaj zabiegu</option>
                            <option value="Twarz - Peeling">Twarz - Peeling</option>
                            <option value="Twarz - Dermapen">Twarz - Dermapen</option>
                            <option value="Twarz - Oczyszczanie twarzy">Twarz - Oczyszczanie twarzy</option>
                            <option value="Ciało - Depilacja">Ciało - Depilacja</option>
                            <option value="Ręce - Manicure">Ręce - Manicure</option>
                            <option value="Stopy - Pedicure">Stopy - Pedicure</option>
                            <option value="Brwi/Rzęsy - Henna">Brwi/Rzęsy - Henna</option>
                            <option value="Brwi/Rzęsy - Laminacja">Brwi/Rzęsy - Laminacja</option>
                            <option value="Brwi/Rzęsy - Regulacja">Brwi/Rzęsy - Regulacja</option>
                            <option value="Makijaż twarzy - Okolicznościowy">Makijaż twarzy - Okolicznościowy</option>
                            <option value="Makijaż twarzy - Permanentny">Makijaż twarzy - Permanentny</option>
                        </select>
                        <!-- Visible custom trigger -->
                        <button type="button" class="custom-select-trigger" id="treatmentSelectTrigger" aria-haspopup="listbox" aria-expanded="false">
                            <span class="custom-select-label" id="treatmentSelectLabel">Wybierz rodzaj zabiegu</span>
                            <span class="custom-select-chevron" aria-hidden="true">&#9662;</span>
                        </button>
                        <!-- Dropdown panel -->
                        <div class="custom-select-panel" id="treatmentSelectPanel" role="listbox">
                            <div class="custom-select-group">
                                <p class="custom-select-group-label">Zabiegi na twarz</p>
                                <div class="custom-select-option" data-value="Twarz - Peeling" role="option" tabindex="0">Peeling</div>
                                <div class="custom-select-option" data-value="Twarz - Dermapen" role="option" tabindex="0">Dermapen</div>
                                <div class="custom-select-option" data-value="Twarz - Oczyszczanie twarzy" role="option" tabindex="0">Oczyszczanie twarzy</div>
                                <div class="custom-select-option" data-value="Twarz - Nano-Needles" role="option" tabindex="0">Nano-Needles</div>
                            
                            </div>
                            <div class="custom-select-group">
                                <p class="custom-select-group-label">Zabiegi na ciało</p>
                                <div class="custom-select-option" data-value="Ciało - Depilacja" role="option" tabindex="0">Depilacja</div>
                            </div>
                            <div class="custom-select-group">
                                <p class="custom-select-group-label">Zabiegi dłoń i stóp</p>
                                <div class="custom-select-option" data-value="Ręce - Manicure" role="option" tabindex="0">Manicure</div>
                                <div class="custom-select-option" data-value="Stopy - Pedicure" role="option" tabindex="0">Pedicure</div>
                            </div>
                            <div class="custom-select-group">
                                <p class="custom-select-group-label">Zabiegi brwi i rzęs</p>
                                <div class="custom-select-option" data-value="Brwi/Rzęsy - Henna" role="option" tabindex="0">Henna</div>
                                <div class="custom-select-option" data-value="Brwi/Rzęsy - Laminacja" role="option" tabindex="0">Laminacja</div>
                                <div class="custom-select-option" data-value="Brwi/Rzęsy - Regulacja" role="option" tabindex="0">Regulacja</div>
                            </div>
                            <div class="custom-select-group">
                                <p class="custom-select-group-label">Makijaże</p>
                                <div class="custom-select-option" data-value="Makijaż twarzy - Okolicznościowy" role="option" tabindex="0">Okolicznościowy</div>
                                <div class="custom-select-option" data-value="Makijaż twarzy - Permanentny" role="option" tabindex="0">Permanentny</div>
                            </div>
                        </div>
                    </div>
                    
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
                        <p class="form-other-simple">obsession.kosmetologia@gmail.com</p>
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

        // ----- Custom Treatment Select -----
        const treatmentWrapper = document.getElementById('treatmentSelectWrapper');
        const treatmentTrigger = document.getElementById('treatmentSelectTrigger');
        const treatmentPanel = document.getElementById('treatmentSelectPanel');
        const treatmentLabel = document.getElementById('treatmentSelectLabel');
        const treatmentHidden = document.getElementById('treatmentSelectHidden');

        if (treatmentWrapper && treatmentTrigger) {
            const overlay = document.createElement('div');
            overlay.className = 'custom-select-overlay';
            document.body.appendChild(overlay);

            function openSelect() {
                treatmentWrapper.classList.add('open');
                treatmentTrigger.setAttribute('aria-expanded', 'true');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeSelect() {
                treatmentWrapper.classList.remove('open');
                treatmentTrigger.setAttribute('aria-expanded', 'false');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            treatmentTrigger.addEventListener('click', function() {
                treatmentWrapper.classList.contains('open') ? closeSelect() : openSelect();
            });

            treatmentPanel.querySelectorAll('.custom-select-option').forEach(function(opt) {
                function selectOption() {
                    const value = opt.dataset.value;
                    treatmentLabel.textContent = opt.textContent;
                    treatmentLabel.classList.add('custom-select-label--selected');
                    treatmentHidden.value = value;
                    treatmentPanel.querySelectorAll('.custom-select-option').forEach(function(o) {
                        o.classList.remove('selected');
                    });
                    opt.classList.add('selected');
                    closeSelect();
                    treatmentTrigger.focus();
                }
                opt.addEventListener('click', selectOption);
                opt.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectOption(); }
                });
            });

            document.addEventListener('click', function(e) {
                if (treatmentWrapper.classList.contains('open') && !treatmentWrapper.contains(e.target)) {
                    closeSelect();
                }
            });

            overlay.addEventListener('click', closeSelect);

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && treatmentWrapper.classList.contains('open')) {
                    closeSelect();
                    treatmentTrigger.focus();
                }
            });
        }
    }, 0);
    return html;
}
export default Form;