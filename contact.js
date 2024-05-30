/*fonction handlSubmit pour gérer la soumission du formulaire*/
function handlSubmit(event){
    //récupére l'élement formulaire avev l'edentifient
    const form = document.getElementById('contact-form');
    //encode l'objet du message du formullaire pour l'inclure dans une URL
    const subject = encodeURIComponent(form.subject.value);
    //encode lz cors du message du formullaire pour l'clure dans une URL
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n`+
        `Prénom: ${form.prenom.value}\n`+
        `Adresse email: ${form.email.value}\n`+
        `Date de naissance : ${form.date.value}\n`+
        `Formation souhaitées: ${form.formations.value}\n`+
        `Actuellement, vous ètes: ${form.annee.value}\n`+
        `Langues parlées: ${Array.forrm(form.langues).filter(langue => langue.checked).map(langue => langue.value).join(`,`)}\n\n`+

        `demande sp~cifique : \n${form.demande.value}`
    );
    window.location.href = `mailto: prenom.nom@univ-ubs.fr?subject = ${subject}&body = ${body}`;
}
