const flags = [
  { "country": "Afeganistão", "countryEn": "Afghanistan", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/1920px-Flag_of_the_Taliban.svg.png" },
  { "country": "África do Sul", "countryEn": "South Africa", "src": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
  { "country": "Albânia", "countryEn": "Albania", "src": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg" },
  { "country": "Alemanha", "countryEn": "Germany", "src": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
  { "country": "Andorra", "countryEn": "Andorra", "src": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" },
  { "country": "Angola", "countryEn": "Angola", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" },
  { "country": "Antígua e Barbuda", "countryEn": "Antigua and Barbuda", "src": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg" },
  { "country": "Arábia Saudita", "countryEn": "Saudi Arabia", "src": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
  { "country": "Argélia", "countryEn": "Algeria", "src": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
  { "country": "Argentina", "countryEn": "Argentina", "src": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
  { "country": "Armênia", "countryEn": "Armenia", "src": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg" },
  { "country": "Austrália", "countryEn": "Australia", "src": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
  { "country": "Áustria", "countryEn": "Austria", "src": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
  { "country": "Azerbaijão", "countryEn": "Azerbaijan", "src": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
  { "country": "Bahamas", "countryEn": "Bahamas", "src": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg" },
  { "country": "Bangladesh", "countryEn": "Bangladesh", "src": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
  { "country": "Barbados", "countryEn": "Barbados", "src": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg" },
  { "country": "Bahrein", "countryEn": "Bahrain", "src": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
  { "country": "Bélgica", "countryEn": "Belgium", "src": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
  { "country": "Belize", "countryEn": "Belize", "src": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
  { "country": "Benin", "countryEn": "Benin", "src": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg" },
  { "country": "Bielorrússia", "countryEn": "Belarus", "src": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg" },
  { "country": "Bolívia", "countryEn": "Bolivia", "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg" },
  { "country": "Bósnia e Herzegovina", "countryEn": "Bosnia and Herzegovina", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
  { "country": "Botsuana", "countryEn": "Botswana", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" },
  { "country": "Brasil", "countryEn": "Brazil", "src": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
  { "country": "Brunei", "countryEn": "Brunei", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg" },
  { "country": "Bulgária", "countryEn": "Bulgaria", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
  { "country": "Burkina Faso", "countryEn": "Burkina Faso", "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" },
  { "country": "Burundi", "countryEn": "Burundi", "src": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg" },
  { "country": "Butão", "countryEn": "Bhutan", "src": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg" },
  { "country": "Cabo Verde", "countryEn": "Cape Verde", "src": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg" },
  { "country": "Camarões", "countryEn": "Cameroon", "src": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg" },
  { "country": "Camboja", "countryEn": "Cambodia", "src": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg" },
  { "country": "Canadá", "countryEn": "Canada", "src": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
  { "country": "Catar", "countryEn": "Qatar", "src": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
  { "country": "Cazaquistão", "countryEn": "Kazakhstan", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
  { "country": "Chade", "countryEn": "Chad", "src": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" },
  { "country": "Chile", "countryEn": "Chile", "src": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
  { "country": "China", "countryEn": "China", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" },
  { "country": "Chipre", "countryEn": "Cyprus", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
  { "country": "Colômbia", "countryEn": "Colombia", "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
  { "country": "Comores", "countryEn": "Comoros", "src": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" },
  { "country": "Congo", "countryEn": "Republic of the Congo", "src": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg" },
  { "country": "Coréia do Norte", "countryEn": "North Korea", "src": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" },
  { "country": "Coréia do Sul", "countryEn": "South Korea", "src": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
  { "country": "Costa do Marfim", "countryEn": "Ivory Coast", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1920px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png" },
  { "country": "Costa Rica", "countryEn": "Costa Rica", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" },
  { "country": "Croácia", "countryEn": "Croatia", "src": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
  { "country": "Cuba", "countryEn": "Cuba", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
  { "country": "Dinamarca", "countryEn": "Denmark", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
  { "country": "Djibouti", "countryEn": "Djibouti", "src": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" },
  { "country": "Dominica", "countryEn": "Dominica", "src": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg" },
  { "country": "Egito", "countryEn": "Egypt", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
  { "country": "Emirados Árabes Unidos", "countryEn": "United Arab Emirates", "src": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
  { "country": "Equador", "countryEn": "Ecuador", "src": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
  { "country": "Eritreia", "countryEn": "Eritrea", "src": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg" },
  { "country": "Eslováquia", "countryEn": "Slovakia", "src": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
  { "country": "Eslovênia", "countryEn": "Slovenia", "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
  { "country": "Espanha", "countryEn": "Spain", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
  { "country": "Estados Unidos", "countryEn": "United States", "src": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
  { "country": "Estônia", "countryEn": "Estonia", "src": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
  { "country": "Eswatini", "countryEn": "Eswatini", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg" },
  { "country": "Etiópia", "countryEn": "Ethiopia", "src": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" },
  { "country": "Fiji", "countryEn": "Fiji", "src": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg" },
  { "country": "Filipinas", "countryEn": "Philippines", "src": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
  { "country": "Finlândia", "countryEn": "Finland", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
  { "country": "França", "countryEn": "France", "src": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
  { "country": "Gabão", "countryEn": "Gabon", "src": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg" },
  { "country": "Gâmbia", "countryEn": "Gambia", "src": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg" },
  { "country": "Gana", "countryEn": "Ghana", "src": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
  { "country": "Geórgia", "countryEn": "Georgia", "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg" },
  { "country": "Granada", "countryEn": "Grenada", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg" },
  { "country": "Grécia", "countryEn": "Greece", "src": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
  { "country": "Guatemala", "countryEn": "Guatemala", "src": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
  { "country": "Guiana", "countryEn": "Guyana", "src": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" },
  { "country": "Guiné", "countryEn": "Guinea", "src": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg" },
  { "country": "Guiné-Bissau", "countryEn": "Guinea-Bissau", "src": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg" },
  { "country": "Guiné Equatorial", "countryEn": "Equatorial Guinea", "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg" },
  { "country": "Haiti", "countryEn": "Haiti", "src": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
  { "country": "Honduras", "countryEn": "Honduras", "src": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg" },
  { "country": "Hungria", "countryEn": "Hungary", "src": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
  { "country": "Iémen", "countryEn": "Yemen", "src": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg" },
  { "country": "Ilhas Marshall", "countryEn": "Marshall Islands", "src": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg" },
  { "country": "Ilhas Salomão", "countryEn": "Solomon Islands", "src": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
  { "country": "Índia", "countryEn": "India", "src": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
  { "country": "Indonésia", "countryEn": "Indonesia", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
  { "country": "Irã", "countryEn": "Iran", "src": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
  { "country": "Iraque", "countryEn": "Iraq", "src": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
  { "country": "Irlanda", "countryEn": "Ireland", "src": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
  { "country": "Islândia", "countryEn": "Iceland", "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
  { "country": "Israel", "countryEn": "Israel", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
  { "country": "Itália", "countryEn": "Italy", "src": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
  { "country": "Jamaica", "countryEn": "Jamaica", "src": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" },
  { "country": "Japão", "countryEn": "Japan", "src": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
  { "country": "Jordânia", "countryEn": "Jordan", "src": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
  { "country": "Kiribati", "countryEn": "Kiribati", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg" },
  { "country": "Kosovo", "countryEn": "Kosovo", "src": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg" },
  { "country": "Kuwait", "countryEn": "Kuwait", "src": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg" },
  { "country": "Laos", "countryEn": "Laos", "src": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg" },
  { "country": "Lesoto", "countryEn": "Lesotho", "src": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg" },
  { "country": "Letônia", "countryEn": "Latvia", "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
  { "country": "Líbano", "countryEn": "Lebanon", "src": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg" },
  { "country": "Libéria", "countryEn": "Liberia", "src": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg" },
  { "country": "Líbia", "countryEn": "Libya", "src": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg" },
  { "country": "Liechtenstein", "countryEn": "Liechtenstein", "src": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" },
  { "country": "Lituânia", "countryEn": "Lithuania", "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
  { "country": "Luxemburgo", "countryEn": "Luxembourg", "src": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
  { "country": "Macedônia do Norte", "countryEn": "North Macedonia", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1920px-Flag_of_North_Macedonia.svg.png" },
  { "country": "Madagascar", "countryEn": "Madagascar", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg" },
  { "country": "Malásia", "countryEn": "Malaysia", "src": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
  { "country": "Malawi", "countryEn": "Malawi", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" },
  { "country": "Maldivas", "countryEn": "Maldives", "src": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg" },
  { "country": "Mali", "countryEn": "Mali", "src": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" },
  { "country": "Malta", "countryEn": "Malta", "src": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
  { "country": "Marrocos", "countryEn": "Morocco", "src": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
  { "country": "Maurícia", "countryEn": "Mauritius", "src": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" },
  { "country": "Mauritânia", "countryEn": "Mauritania", "src": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg" },
  { "country": "México", "countryEn": "Mexico", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
  { "country": "Mianmar", "countryEn": "Myanmar", "src": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg" },
  { "country": "Micronésia", "countryEn": "Micronesia", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1920px-Flag_of_the_Federated_States_of_Micronesia.svg.png" },
  { "country": "Moçambique", "countryEn": "Mozambique", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" },
  { "country": "Moldávia", "countryEn": "Moldova", "src": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" },
  { "country": "Mônaco", "countryEn": "Monaco", "src": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
  { "country": "Mongólia", "countryEn": "Mongolia", "src": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" },
  { "country": "Montenegro", "countryEn": "Montenegro", "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" },
  { "country": "Namíbia", "countryEn": "Namibia", "src": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg" },
  { "country": "Nauru", "countryEn": "Nauru", "src": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
  { "country": "Nepal", "countryEn": "Nepal", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" },
  { "country": "Nicarágua", "countryEn": "Nicaragua", "src": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
  { "country": "Níger", "countryEn": "Niger", "src": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg" },
  { "country": "Nigéria", "countryEn": "Nigeria", "src": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
  { "country": "Noruega", "countryEn": "Norway", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
  { "country": "Nova Zelândia", "countryEn": "New Zealand", "src": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
  { "country": "Omã", "countryEn": "Oman", "src": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg" },
  { "country": "Países Baixos", "countryEn": "Netherlands", "src": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
  { "country": "Palau", "countryEn": "Palau", "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg" },
  { "country": "Panamá", "countryEn": "Panama", "src": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
  { "country": "Papua Nova Guiné", "countryEn": "Papua New Guinea", "src": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg" },
  { "country": "Paquistão", "countryEn": "Pakistan", "src": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
  { "country": "Paraguai", "countryEn": "Paraguay", "src": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
  { "country": "Peru", "countryEn": "Peru", "src": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
  { "country": "Polônia", "countryEn": "Poland", "src": "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" },
  { "country": "Portugal", "countryEn": "Portugal", "src": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
  { "country": "Qatar", "countryEn": "Qatar", "src": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
  { "country": "Quênia", "countryEn": "Kenya", "src": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
  { "country": "Quirguistão", "countryEn": "Kyrgyzstan", "src": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" },
  { "country": "Reino Unido", "countryEn": "United Kingdom", "src": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
  { "country": "República Centro-Africana", "countryEn": "Central African Republic", "src": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" },
  { "country": "República Checa", "countryEn": "Czech Republic", "src": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
  { "country": "República Democrática do Congo", "countryEn": "Democratic Republic of the Congo", "src": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
  { "country": "República Dominicana", "countryEn": "Dominican Republic", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" },
  { "country": "Romênia", "countryEn": "Romania", "src": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
  { "country": "Ruanda", "countryEn": "Rwanda", "src": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" },
  { "country": "Rússia", "countryEn": "Russia", "src": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
  { "country": "Salomão", "countryEn": "Solomon Islands", "src": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
  { "country": "Samoa", "countryEn": "Samoa", "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg" },
  { "country": "San Marino", "countryEn": "San Marino", "src": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg" },
  { "country": "Santa Lúcia", "countryEn": "Saint Lucia", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" },
  { "country": "São Cristóvão e Nevis", "countryEn": "Saint Kitts and Nevis", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/1920px-Flag_of_Saint_Kitts_and_Nevis.svg.png" },
  { "country": "São Tomé e Príncipe", "countryEn": "São Tomé and Príncipe", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1920px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png" },
  { "country": "São Vicente e Granadinas", "countryEn": "Saint Vincent and the Grenadines", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1920px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png" },
  { "country": "Senegal", "countryEn": "Senegal", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
  { "country": "Serra Leoa", "countryEn": "Sierra Leone", "src": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg" },
  { "country": "Sérvia", "countryEn": "Serbia", "src": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" },
  { "country": "Singapura", "countryEn": "Singapore", "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
  { "country": "Síria", "countryEn": "Syria", "src": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg" },
  { "country": "Somália", "countryEn": "Somalia", "src": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" },
  { "country": "Sri Lanka", "countryEn": "Sri Lanka", "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" },
  { "country": "Sudão", "countryEn": "Sudan", "src": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg" },
  { "country": "Sudão do Sul", "countryEn": "South Sudan", "src": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg" },
  { "country": "Suécia", "countryEn": "Sweden", "src": "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" },
  { "country": "Suíça", "countryEn": "Switzerland", "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" },
  { "country": "Suriname", "countryEn": "Suriname", "src": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" },
  { "country": "Tailândia", "countryEn": "Thailand", "src": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
  { "country": "Taiwan", "countryEn": "Taiwan", "src": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg" },
  { "country": "Tajiquistão", "countryEn": "Tajikistan", "src": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg" },
  { "country": "Tanzânia", "countryEn": "Tanzania", "src": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg" },
  { "country": "Timor-Leste", "countryEn": "Timor-Leste", "src": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" },
  { "country": "Togo", "countryEn": "Togo", "src": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg" },
  { "country": "Tonga", "countryEn": "Tonga", "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg" },
  { "country": "Trinidad e Tobago", "countryEn": "Trinidad and Tobago", "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg" },
  { "country": "Tunísia", "countryEn": "Tunisia", "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },
  { "country": "Turcomenistão", "countryEn": "Turkmenistan", "src": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" },
  { "country": "Turquia", "countryEn": "Turkey", "src": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
  { "country": "Tuvalu", "countryEn": "Tuvalu", "src": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg" },
  { "country": "Ucrânia", "countryEn": "Ukraine", "src": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" },
  { "country": "Uganda", "countryEn": "Uganda", "src": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" },
  { "country": "Uruguai", "countryEn": "Uruguay", "src": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
  { "country": "Uzbequistão", "countryEn": "Uzbekistan", "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" },
  { "country": "Vanuatu", "countryEn": "Vanuatu", "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg" },
  { "country": "Vaticano", "countryEn": "Vatican City", "src": "https://pt.wikipedia.org/wiki/Bandeira_do_Vaticano#/media/Ficheiro:Flag_of_Vatican_City_(2001%E2%80%932023).svg" },
  { "country": "Venezuela", "countryEn": "Venezuela", "src": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" },
  { "country": "Vietnã", "countryEn": "Vietnam", "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
  { "country": "Zâmbia", "countryEn": "Zambia", "src": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg" },
  { "country": "Zimbábue", "countryEn": "Zimbabwe", "src": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" },
  { "country": "Guiana Francesa", "countryEn": "French Guiana", "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/2560px-Flag_of_French_Guiana.svg.png"}
];

let currentQuestion = 0;
let score = 0;
let options = []
const rounds = 10;

const flagElement = document.getElementById('flag');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const progressBarElement = document.getElementById('progress-bar');


function loadQuestion() {
  const currentFlag = flags[currentQuestion];
  flagElement.src = currentFlag.src;
  optionsElement.innerHTML = '';

  const onlyWrongFlags = [...flags.slice(0, currentQuestion), ...flags.slice(currentQuestion + 1)]
  const shuffleFlags = shuffleArray([...onlyWrongFlags]);
  const wrongOptions = shuffleFlags.slice(0, 3);
  options = shuffleArray([flags[currentQuestion], ...wrongOptions])

  options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = `${index + 1} - ${option.country}`;
      button.setAttribute('data-option', index + 1);
      button.className = 'option';
      button.onclick = () => checkAnswer(option.country);
      optionsElement.appendChild(button);
  });

  nextButton.style.display = 'none';
  resultElement.textContent = '';
}

function setProgress() {
  const progress = ((currentQuestion + 1)/rounds)*100;

  progressBarElement.style.width = `${progress}%`;
  progressBarElement.textContent = `${currentQuestion + 1}/${rounds}`;
}

function clearStatus() {
  progressBarElement.hidden = true
  
}

function checkAnswer(selectedCountry) {
  const currentFlag = flags[currentQuestion];
  if (selectedCountry === currentFlag.country) {
      score++;
      setProgress()
      resultElement.textContent = 'Correto!';
      resultElement.style.color = 'green';
  } else {
      resultElement.textContent = `Errado! A resposta correta é ${currentFlag.country}.`;
      resultElement.style.color = 'red';
  }

  nextButton.style.display = 'block';
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < rounds) {
      loadQuestion();
      setProgress();
  } else {
      clearStatus();
      resultElement.textContent = `Quiz concluído! Sua pontuação: ${score} de ${rounds}`;
      flagElement.style.display = 'none';
      optionsElement.style.display = 'none';
      nextButton.style.display = 'none';
  }
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener('keydown', (event) => {
  if (event.key >= '1' && event.key <= '4') {
    const option = document.querySelector(`.option[data-option="${event.key}"]`);
    console.log(event.key)
    if (option) {
      option.click();
    }
  }

  if (event.key === 'Enter') {
    if (nextButton.checkVisibility()){
      nextButton.click()
    }
  }
});


shuffleArray(flags);
setProgress();
loadQuestion();