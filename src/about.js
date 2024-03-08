const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

const h2 = document.createElement('h2');
h2.textContent = "The Dominican Restaurant";

aboutContainer.appendChild(h2);

const paragraphs = document.createElement('div');
paragraphs.classList.add('paragraphs');

const p1 = document.createElement('p');
p1.textContent = `Welcome to "Sabor Dominicano," a beloved culinary haven in the heart
of New York City, where the vibrant flavors of the Dominican
Republic come to life. Since its establishment in 1994 by esteemed
restaurateur Jane Doe, Sabor Dominicano has been a beacon of
Dominican culinary excellence, housed in a historic landmark
building just north of Union Square. Our warm hospitality and
unparalleled service invite guests to embark on a flavorful journey
through the rich tapestry of Dominican cuisine.`;
paragraphs.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = `Under the guidance of Chef John Doe, our ever-evolving seasonal menu
celebrates the bounty of the Dominican Republic's land and sea. From
succulent mofongo to aromatic sancocho, each dish is meticulously
crafted to capture the essence of Dominican culinary traditions
while incorporating modern culinary techniques. Sabor Dominicano's
deep-rooted relationships with local farms and purveyors ensure that
every ingredient is of the highest quality, resulting in a dining
experience that delights the senses and nourishes the soul.`;
paragraphs.appendChild(p2);

aboutContainer.appendChild(paragraphs);

export {aboutContainer};