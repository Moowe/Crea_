/*recaptcha*/
(function(){
    if(document.getElementById("contacts_form")){
        let contactsForm = document.getElementById("contacts_form");
        contactsForm.addEventListener("submit", function(event){
            event.preventDefault();
            grecaptcha.execute("6LeRor4UAAAAANHMDwoOEs2BPF_ORir0Kt2zab7Z", {action: "homepage"}).then(function(token) {
                if(token.success && token.action == "homepage" && token.score > 0.5){
                    contactsForm.submit();
                }
            });
        });
    }
}());
