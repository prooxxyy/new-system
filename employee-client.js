/* =========================================
   GET CURRENT DATE AND TIME
========================================= */

function getCurrentDateTime() {

    const now = new Date();

    return now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}


/* =========================================
   FORM VALIDATION
========================================= */

function validateForm() {

    const name =
        document.getElementById("name").value.trim();

    const office =
        document.getElementById("office").value.trim();

    const position =
        document.getElementById("position").value.trim();

    const pretest =
        document.getElementById("pretest").value.trim();

    const posttest =
        document.getElementById("posttest").value.trim();


    if (!name) {

        alert("Please enter the full name.");

        document.getElementById("name").focus();

        return false;
    }


    if (!office) {

        alert("Please enter the office.");

        document.getElementById("office").focus();

        return false;
    }


    if (!position) {

        alert("Please enter the position.");

        document.getElementById("position").focus();

        return false;
    }


    if (pretest === "") {

        alert("Please enter the pre-test score.");

        document.getElementById("pretest").focus();

        return false;
    }


    if (posttest === "") {

        alert("Please enter the post-test score.");

        document.getElementById("posttest").focus();

        return false;
    }


    if (Number(pretest) < 0) {

        alert("Pre-test score cannot be negative.");

        document.getElementById("pretest").focus();

        return false;
    }


    if (Number(posttest) < 0) {

        alert("Post-test score cannot be negative.");

        document.getElementById("posttest").focus();

        return false;
    }


    return true;
}


/* =========================================
   GENERATE QR CODE
========================================= */

/* =========================================
   GENERATE QR CODE
========================================= */

function generateQR() {

    const name =
        document.getElementById("name").value.trim();

    const office =
        document.getElementById("office").value.trim();

    const position =
        document.getElementById("position").value.trim();

    const pretest =
        document.getElementById("pretest").value.trim();

    const posttest =
        document.getElementById("posttest").value.trim();


    // =========================================
    // CHECK REQUIRED FIELDS
    // =========================================

    if (
        !name ||
        !office ||
        !position ||
        pretest === "" ||
        posttest === ""
    ) {

        alert(
            "Please complete all fields before generating the QR code."
        );

        return;
    }


    // =========================================
    // DATA STORED INSIDE QR CODE
    // =========================================

    const qrData = {

        name: name,

        office: office,

        position: position,

        pretest: pretest,

        posttest: posttest

    };


    // Convert data to JSON
    const qrText =
        JSON.stringify(qrData);


    console.log(
        "QR DATA:",
        qrData
    );


    // =========================================
    // CLEAR PREVIOUS QR CODE
    // =========================================

    const qrContainer =
        document.getElementById("qrcode");

    qrContainer.innerHTML = "";


    // =========================================
    // GENERATE QR CODE
    // =========================================

    new QRCode(qrContainer, {

        text: qrText,

        width: 230,

        height: 230,

        correctLevel:
            QRCode.CorrectLevel.H

    });


    // =========================================
    // SHOW GENERATED QR
    // =========================================

    document.getElementById(
        "qrPlaceholder"
    ).style.display = "none";


    document.getElementById(
        "qrResult"
    ).style.display = "block";


    // =========================================
    // DISPLAY INFORMATION
    // =========================================

    document.getElementById(
        "qrName"
    ).textContent = name;


    document.getElementById(
        "qrOffice"
    ).textContent = office;


    document.getElementById(
        "qrPosition"
    ).textContent = position;


    document.getElementById(
        "qrPretest"
    ).textContent = pretest;


    document.getElementById(
        "qrPosttest"
    ).textContent = posttest;


    document.getElementById(
        "qrDate"
    ).textContent =
        new Date().toLocaleString();


    // =========================================
    // SAVE LATEST QR DATA
    // =========================================

    localStorage.setItem(
        "latestQRData",
        qrText
    );


    // =========================================
    // UPDATE QR GENERATED COUNT
    // =========================================

    let qrCount =
        parseInt(
            localStorage.getItem("qrGenerated") || "0"
        );

    qrCount++;

    localStorage.setItem(
        "qrGenerated",
        qrCount
    );

}