function Form() {

    const html = `
        <div class="form-main-container">
            <p class="form-title">
                Zapisz się do mnie!
            </p>
            <div class="form-container">
                <form class="form-form" id="contactForm" action="https://formsubmit.co/k_kalbarczyk@o2.pl" method="POST" target="_blank">
                <!-- Ukryte pola konfiguracyjne FormSubmit -->
                    <input type="hidden" name="_subject" value="Nowe zgłoszenie - zapis na zabieg">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="_next" value="https://twoja-strona.pl/dziekujemy.html">
                    
                    <!-- Pola formularza -->
                    <input type="text" name="imie" placeholder="Imię i nazwisko" required>
                    
                    <input type="tel" name="telefon" placeholder="Numer telefonu" required>
                    
                    <input type="text" name="data" placeholder="Preferowana data (np. 25.02.2026)">
                    
                    <select name="zabieg" required>
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
                    
                    <textarea name="uwagi" rows="4" placeholder="Opis zabiegu"></textarea>
                    <textarea name="uwagi" rows="4" placeholder="Dodatkowe uwagi (opcjonalnie)"></textarea>
                    
                    <!-- Zgoda RODO -->
                    <div class="checkbox-group">
                      <input type="checkbox" class="input-RODO" name="rodo" id="rodo" required>
                      <label for="rodo">
                        Zgadzam się na przetwarzanie moich danych osobowych w celu realizacji zapisu na zabieg. 
                        Zapoznałem/am się z <a href="/polityka-prywatnosci.html">polityką prywatności</a>.
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
                
            
            
        </div>
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
    }, 0);
    return html;
}
export default Form;