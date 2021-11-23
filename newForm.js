let count = 0;
function submitBtn() {
    var contNum = document.getElementById('contactNum');
    if (!/^(09|639)\d{9}$/.test(contNum.value)) {
        alert(`${contNum.value} Not valid! \n Please enter a valid contact number. Thank you! `);
        return false;
    } else {
        count++;
        const genderChoice = document.querySelectorAll("input[name = 'gender']");

        let gender;
        for (const c of genderChoice) {
            if (c.checked) {
                gender = c.value;

            }
        }

        // alert('hi');

        const checkboxes = document.querySelectorAll("input[name = 'medhis']:checked");
        let checkedValues = [];
        checkboxes.forEach((checkbox) => {
            checkedValues.push(checkbox.value);
        });

        // alert('hello');

        const selection = document.getElementById("currentsymptoms");
        const selected = [...selection.options]
            .filter((option) => option.selected)
            .map((option) => option.value);

        // alert('hey');

        let medication = document.getElementById("medtext").value;
        if (medication != "") {
            var med = "Current medication: " + medication;
        } else med = "No current medication";

        // alert('Yow');

        let patienform = document.forms["patientForm"];
        let firstname = patienform["firstname"].value;
        let midname = patienform["midname"].value;
        let lastname = patienform["lastname"].value;
        let address = patienform["address"].value;
        // alert('jkalhfjkafhsjka')
        let cont = patienform["contact"].value;
        let bday = patienform["birthday"].value;

        // alert('sup');

        let patientInfos = [];

        let patient = {
            id: Date.now(),
            fname: firstname,
            mname: midname,
            lname: lastname,
            addr: address,
            bd: bday,
            con: cont,
            gen: gender,
            chck: checkedValues,
            sel: selected,
            md: med,
        }

        // alert('was');

        if (count != 0) patientInfos = JSON.parse(localStorage.getItem("patientInfo"))
        else patientInfos = [];

        patientInfos.push(patient);
        console.table(patientInfos);

        localStorage.setItem("patientInfo", JSON.stringify(patientInfos));

        // alert('congrats');
    }

}

function radioBtn(rad) {
    let radioBtn = document.getElementById('medtext');
    if (rad.value == 'yes') {
        radioBtn.disabled = false;
        radioBtn.required = true;
    }
    else radioBtn.disabled = true; radioBtn.value = '';
}