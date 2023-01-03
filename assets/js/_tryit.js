import "../css/_tryit.pcss";

import flasher from "@flasher/flasher";
import toastr from "@flasher/flasher-toastr";
import noty from "@flasher/flasher-noty";

const messages = {
    success: [
        "Success!",
        "Operation completed successfully.",
        "Task completed successfully.",
        "Your request was processed successfully.",
        "The operation was successful.",
        "Great success!",
        "The action was completed successfully.",
        "Your submission has been received successfully.",
        "The process was completed successfully.",
        "The operation completed successfully.",
        "Your account has been created!",
        "Your password has been reset.",
        "Your payment was processed successfully.",
        "Your profile has been updated.",
        "Your item has been added to your cart.",
        "Your order has been placed.",
        "Your file has been uploaded.",
        "Your request has been received.",
        "Your reservation has been confirmed.",
        "Your question has been submitted.",
        "Your application has been received.",
        "Your subscription has been activated.",
        "Your account has been verified.",
        "Your message has been sent.",
        "Your feedback has been submitted.",
        "Your password has been changed.",
        "Your account has been linked.",
        "Your email has been verified.",
        "Your address has been updated.",
        "Your payment has been accepted.",
        "Your account has been unlinked.",
        "Your subscription has been cancelled.",
        "Your account has been deactivated.",
        "Your form has been submitted.",
        "Your product has been shipped.",
        "Your feedback has been received.",
        "Your information has been saved.",
        "Your password has been set.",
        "Your account has been reactivated.",
        "Your message has been received.",
        "Your account has been terminated.",
        "Your order has been shipped.",
        "Your account has been suspended.",
        "Your contact has been added.",
        "Your donation has been received.",
        "Your review has been posted.",
        "Your report has been generated.",
        "Your device has been registered.",
        "Your account has been unlocked.",
        "Your review has been submitted.",
        "Your account has been de-registered.",
        "Your contact has been removed.",
        "Your account has been locked.",
        "Your account has been reinstated.",
        "Your account has been un-suspended.",
        "Your account has been reactivated.",
        "Your account has been restored.",
        "Your account has been re-activated.",
        "Your account has been un-terminated.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
        "Your account has been restored.",
        "Your account has been re-verified.",
        "Your account has been re-activated.",
    ],
    error: [
        "Error!",
        "An error occurred.",
        "There was a problem processing your request.",
        "Something went wrong.",
        "The operation failed.",
        "Sorry, something went wrong.",
        "Oops, something went wrong.",
        "An error has occurred.",
        "We're sorry, but an error occurred.",
        "An unexpected error occurred.",
        "An error occurred while creating your account.",
        "There was a problem resetting your password.",
        "There was an issue processing your payment.",
        "There was a problem updating your profile.",
        "There was an issue adding your item to the cart.",
        "There was a problem placing your order.",
        "There was an issue uploading your file.",
        "There was a problem receiving your request.",
        "There was an issue confirming your reservation.",
        "There was a problem submitting your question.",
        "There was an issue receiving your application.",
        "There was a problem activating your subscription.",
        "There was an issue verifying your account.",
        "There was a problem sending your message.",
        "There was an issue submitting your feedback.",
        "There was a problem changing your password.",
        "There was an issue linking your account.",
        "There was a problem verifying your email.",
        "There was an issue updating your address.",
        "There was a problem accepting your payment.",
        "There was an issue un-linking your account.",
        "There was a problem cancelling your subscription.",
        "There was an issue deactivating your account.",
        "There was a problem submitting your form.",
        "There was an issue shipping your product.",
        "There was a problem receiving your feedback.",
        "There was an issue saving your information.",
        "There was a problem setting your password.",
        "There was an issue reactivating your account.",
        "There was a problem receiving your message.",
        "There was an issue terminating your account.",
        "There was a problem shipping your order.",
        "There was an issue suspending your account.",
        "There was a problem adding your contact.",
        "There was an issue receiving your donation.",
        "There was a problem posting your review.",
        "There was an issue generating your report.",
        "There was a problem registering your device.",
        "There was an issue unlocking your account.",
        "There was a problem submitting your review.",
        "There was an issue de-registering your account.",
        "There was a problem removing your contact.",
        "There was an issue locking your account.",
        "There was a problem reinstating your account.",
        "There was an issue un-suspending your account.",
        "There was a problem reactivating your account.",
        "There was an issue restoring your account.",
        "There was a problem re-activating your account.",
        "There was an issue un-terminating your account.",
        "There was a problem re-verifying your account.",
        "There was an issue re-activating your account.",
        "There was a problem restoring your account.",
        "There was an issue re-verifying your account.",
        "There was a problem re-activating your account.",
        "There was an issue restoring your account.",
        "There was a problem re-verifying your account.",
        "There was an issue re-activating your account.",
        "There was a problem restoring your account.",
        "There was an issue re-verifying your account.",
        "There was a problem re-activating your account.",
        "There was an issue restoring your account.",
    ],
    warning: [
        "Warning: This cannot be undone.",
        "Caution: May have unintended consequences.",
        "Exercise caution when performing this action.",
        "This may have unintended consequences. Proceed with caution.",
        "Warning: This may be irreversible.",
        "Caution: May have unintended results.",
        "Warning: Proceed with caution.",
        "Your account may have been compromised.",
        "Your password may be at risk.",
        "Your payment may not have been processed.",
        "Your profile may not have been updated.",
        "Your item may not have been added to the cart.",
        "Your order may not have been placed.",
        "Your file may not have been uploaded.",
        "Your request may not have been received.",
        "Your reservation may not have been confirmed.",
        "Your question may not have been submitted.",
        "Your application may not have been received.",
        "Your subscription may not have been activated.",
        "Your account may not have been verified.",
        "Your message may not have been sent.",
        "Your feedback may not have been submitted.",
        "Your password may not have been changed.",
        "Your account may not have been linked.",
        "Your email may not have been verified.",
        "Your address may not have been updated.",
        "Your payment may not have been accepted.",
        "Your account may not have been unlinked.",
        "Your subscription may not have been cancelled.",
        "Your account may not have been deactivated.",
        "Your form may not have been submitted.",
        "Your product may not have been shipped.",
        "Your feedback may not have been received.",
        "Your information may not have been saved.",
        "Your password may not have been set.",
        "Your account may not have been reactivated.",
        "Your message may not have been received.",
        "Your account may not have been terminated.",
        "Your order may not have been shipped.",
        "Your account may not have been suspended.",
        "Your contact may not have been added.",
        "Your donation may not have been received.",
        "Your review may not have been posted.",
        "Your report may not have been generated.",
        "Your device may not have been registered.",
        "Your account may not have been unlocked.",
        "Your review may not have been submitted.",
        "Your account may not have been de-registered.",
        "Your contact may not have been removed.",
        "Your account may not have been locked.",
        "Your account may not have been reinstated.",
        "Your account may not have been un-suspended.",
        "Your account may not have been reactivated.",
        "Your account may not have been restored.",
        "Your account may not have been re-activated.",
        "Your account may not have been un-terminated.",
        "Your account may not have been re-verified.",
        "Your account may not have been re-activated.",
        "Your account may not have been restored.",
        "Your account may not have been re-verified.",
        "Your account may not have been re-activated.",
        "Your account may not have been restored.",
        "Your account may not have been re-verified.",
        "Your account may not have been re-activated.",
    ],
    info: [
        "Heads up: This may take a while.",
        "This may take some time. Please be patient.",
        "This may take a while. Do not refresh the page.",
        "Heads up: This may take a while. Be patient.",
        "This may take some time. Do not refresh the page.",
        "Your account has been created, but requires verification.",
        "Your password has been reset and a new one has been sent to your email.",
        "Your payment has been processed, but may take a few days to reflect on your account.",
        "Your profile has been updated, but some changes may require verification.",
        "Your item has been added to your cart, but may not be reserved until checkout.",
        "Your order has been placed and is being processed.",
        "Your file has been uploaded and is being processed.",
        "Your request has been received and is being processed.",
        "Your reservation has been confirmed and a confirmation email has been sent.",
        "Your question has been submitted and is being reviewed.",
        "Your application has been received and is being reviewed.",
        "Your subscription has been activated and a confirmation email has been sent.",
        "Your account has been verified and is now active.",
        "Your message has been sent and a confirmation email has been sent.",
        "Your feedback has been submitted and is being reviewed.",
        "Your password has been changed and a confirmation email has been sent.",
        "Your account has been linked and a confirmation email has been sent.",
        "Your email has been verified and a confirmation email has been sent.",
        "Your address has been updated and a confirmation email has been sent.",
        "Your payment has been accepted and a confirmation email has been sent.",
        "Your account has been unlinked and a confirmation email has been sent.",
        "Your subscription has been cancelled and a confirmation email has been sent.",
        "Your account has been deactivated and a confirmation email has been sent.",
        "Your form has been submitted and is being processed.",
        "Your product has been shipped and a tracking number has been sent to your email.",
        "Your feedback has been received and is being reviewed.",
        "Your information has been saved and a confirmation email has been sent.",
        "Your password has been set and a confirmation email has been sent.",
        "Your account has been reactivated and a confirmation email has been sent.",
        "Your message has been received and is being processed.",
        "Your account has been terminated and a confirmation email has been sent.",
        "Your order has been shipped and a tracking number has been sent to your email.",
        "Your account has been suspended and a confirmation email has been sent.",
        "Your contact has been added and a confirmation email has been sent.",
        "Your donation has been received and a confirmation email has been sent.",
        "Your review has been posted and is being reviewed.",
        "Your report has been generated and a confirmation email has been sent.",
        "Your device has been registered and a confirmation email has been sent.",
        "Your account has been unlocked and a confirmation email has been sent.",
        "Your review has been submitted and is being reviewed.",
        "Your account has been de-registered and a confirmation email has been sent.",
        "Your contact has been removed and a confirmation email has been sent.",
        "Your account has been locked and a confirmation email has been sent.",
        "Your account has been reinstated and a confirmation email has been sent.",
        "Your account has been un-suspended and a confirmation email has been sent.",
        "Your account has been reactivated and a confirmation email has been sent.",
    ],
};

function getRandomMessageByType(type) {
    const messagesByType = messages[type];
    const random = Math.floor(Math.random() * messagesByType.length);

    return messagesByType[random];
}

function getRandomType() {
    const types = Object.keys(messages);
    const random = Math.floor(Math.random() * types.length);

    return types[random];
}

function getRandomMessage() {
    const type = getRandomType();

    return getRandomMessageByType(type);
}

const examples = {
    "# General usage": function () {
        flasher.success("Book has been created successfully!");
    },
    "# success": function () {
        flasher.success(getRandomMessageByType("success"));
    },
    "# error": function () {
        flasher.error(getRandomMessageByType("error"));
    },
    "# warning": function () {
        flasher.warning(getRandomMessageByType("warning"));
    },
    "# info": function () {
        flasher.info(getRandomMessageByType("info"));
    },
    "# notification builder with toastr": function () {
        toastr.success("The action was completed successfully.", "Great!", {
            timeOut: 10000,
        });
    },
    "# example with type": function () {
        flasher.error("An error has occurred please try again later.");
    },
    "# success type with title": function () {
        flasher.success(getRandomMessageByType("success"), "Congratulations!");
    },
    "# error message": function () {
        flasher.error("This may take some time. Do not refresh the page.");
    },
    "# error message with title": function () {
        flasher.error("This may take some time. Do not refresh the page.", "Oops!");
    },
    "# error message with options": function () {
        flasher.error("This may take some time. Do not refresh the page.", "Oops!", {
            timeout: 10000,
            position: "top-center",
        });
    },
    "# success message with options": function () {
        flasher.success("The action was completed successfully.", "Congratulations!", {
            timeout: 10000,
            position: "top-center",
        });
    },
    "# Message with priority": function () {
        flasher.warning("Message with priority 4");
        flasher.success("Message with priority 3");
        flasher.info("Message with priority 2");
        flasher.error("Message with priority 1");
    },
    "# Translated message": function () {
        flasher.success("تمت العملية بنجاح.", "تهانينا!", {
            rtl: true,
            position: "top-right",
        });
    },
    "# Translated message top-left": function () {
        flasher.success("تمت العملية بنجاح.", "تهانينا!", {
            rtl: true,
            position: "top-left",
        });
    },
    "# preset entity_saved": function () {
        flasher.success("Entity saved successfully", "Entity saved");
    },
    "# arabic translation": function () {
        flasher.success("تم إرسال طلبك بنجاح.", "نجاح", { rtl: true });
        flasher.error("حدث خطأ أثناء إرسال طلبك.", "خطأ", { rtl: true });
        flasher.warning("يجب إكمال جميع الحقول الإلزامية قبل إرسال النموذج", "تحذير", { rtl: true });
        flasher.info("سيتم تحديث هذه الصفحة في غضون 10 دقائق.", "معلومة", { rtl: true });
    },
    "# french translation": function () {
        flasher.success("Votre demande a été envoyée avec succès.", "Succès");
        flasher.error("Une erreur s'est produite lors de l'envoi de votre demande.", "Erreur");
        flasher.warning(
            "Vous devez remplir tous les champs obligatoires avant de soumettre le formulaire.",
            "Avertissement"
        );
        flasher.info("Cette page sera mise à jour dans 10 minutes.", "Information");
    },
    "# noty": function () {
        noty.success("The book has been added to the library successfully!");
    },
    "# noty text": function () {
        noty.error("Oops, something went wrong.");
    },
    "# noty alert": function () {
        noty.flash("alert", "This may take a while. Do not refresh the page.");
    },
    "# noty layout": function () {
        noty.success("The action was completed successfully.", {
            layout: "topCenter",
        });
    },
    "# noty theme mint": function () {
        noty.success("Your request was successfully sent.", { theme: "mint" });
        noty.error("An error occurred while sending your request.", { theme: "mint" });
        noty.warning("You must fill out all required fields before submitting the form.", { theme: "mint" });
        noty.info("This page will be updated in 10 minutes.", { theme: "mint" });
    },
    "# noty theme relax": function () {
        import("noty/lib/themes/relax.css").then(function () {
            noty.success("Your request was successfully sent.", { theme: "relax" });
            noty.error("An error occurred while sending your request.", { theme: "relax" });
            noty.warning("You must fill out all required fields before submitting the form.", { theme: "relax" });
            noty.info("This page will be updated in 10 minutes.", { theme: "relax" });
        });
    },
    "# noty theme metroui": function () {
        import("noty/lib/themes/metroui.css").then(function () {
            noty.success("Your request was successfully sent.", { theme: "metroui" });
            noty.error("An error occurred while sending your request.", { theme: "metroui" });
            noty.warning("You must fill out all required fields before submitting the form.", { theme: "metroui" });
            noty.info("This page will be updated in 10 minutes.", { theme: "metroui" });
        });
    },
    "# noty theme light": function () {
        import("noty/lib/themes/light.css").then(function () {
            noty.success("Your request was successfully sent.", { theme: "light" });
            noty.error("An error occurred while sending your request.", { theme: "light" });
            noty.warning("You must fill out all required fields before submitting the form.", { theme: "light" });
            noty.info("This page will be updated in 10 minutes.", { theme: "light" });
        });
    },
    "# noty theme nest": function () {
        import("noty/lib/themes/nest.css").then(function () {
            noty.success("Your request was successfully sent.", { theme: "nest" });
            noty.error("An error occurred while sending your request.", { theme: "nest" });
            noty.warning("You must fill out all required fields before submitting the form.", { theme: "nest" });
            noty.info("This page will be updated in 10 minutes.", { theme: "nest" });
        });
    },
    "# noty theme sunset": function () {
        import("noty/lib/themes/sunset.css").then(function () {
            noty.success("Your request was successfully sent.", { theme: "sunset" });
            noty.error("An error occurred while sending your request.", { theme: "sunset" });
            noty.warning("You must fill out all required fields before submitting the form.", { theme: "sunset" });
            noty.info("This page will be updated in 10 minutes.", { theme: "sunset" });
        });
    },
    "# noty timeout": function () {
        noty.success("The action was completed successfully.", { timeout: 2000 });
    },
    "# noty progressBar": function () {
        noty.success("The action was completed successfully.", { progressBar: false });
    },
    "# noty closeWith": function () {
        noty.error("An error occurred while sending your request.", { closeWith: ["click", "button"] });
    },
    "# noty animation": function () {
        noty.info("This may take some time. Do not refresh the page.", { animation: null });
    },
    "# noty sounds": function () {
        noty.success("The operation completed successfully.", {
            sources: ["/dist/sounds/notification.wav"],
            volume: 0.3,
            conditions: ["docVisible", "docHidden"],
        });
    },
    "# noty docTitle": function () {
        noty.success("The operation completed successfully.", { docTitle: ["docVisible", "docHidden"] });
    },
    "# noty modal": function () {
        noty.error("There was a problem processing your request.", { modal: true });
    },
    "# noty id": function () {
        noty.warning("This may have unintended consequences. Proceed with caution.", { id: false });
    },
    "# noty force": function () {
        noty.warning("This may have unintended consequences. Proceed with caution.", { force: false });
    },
    "# noty queue": function () {
        noty.warning("This may have unintended consequences. Proceed with caution.", { queue: "global" });
    },
    "# noty killer": function () {
        noty.error("There was a problem processing your request.", { killer: true });
    },
    "# noty container": function () {
        noty.error("There was a problem processing your request.", { container: false });
    },
    "# noty visibilityControl": function () {
        noty.error("There was a problem processing your request.", { visibilityControl: true });
    },
};

const codeBlocks = document.querySelectorAll("pre > code");

codeBlocks.forEach(function (codeBlock) {
    const code = codeBlock.innerText.trim();
    if (!code.startsWith("#")) {
        return;
    }

    const button = document.createElement("button");
    button.classList.add("tryit", "text-indigo-500");
    button.type = "button";
    button.ariaLabel = button.title = "Try it!";

    const icon = '<i class="fa-duotone fa-play"></i>';
    button.innerHTML = icon;

    const parent = codeBlock.parentElement;
    parent.classList.add("tryable");

    parent.append(button);

    button.addEventListener("click", function () {
        button.innerHTML = '<i class="fa-duotone fa-spinner-third spin"></i>';

        const example = code.split("\n")[0].trim();

        try {
            examples[example]();
        } catch (error) {
            console.error(error);
            console.log(`${example} example doest not exist`);
        }

        setTimeout(function () {
            button.innerHTML = icon;
        }, 500);
    });
});
