function strongPassword(input) {
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let specialChar = false;
    const normalChars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= "a" && input[i] <= "z") {
            hasLower = true;
        }
        if (input[i] >= "A" && input[i] <= "Z") {
            hasUpper = true;
        }
        if (input[i] >= "0" && input[i] <= "9") {
            hasDigit = true;
        }
        if (!normalChars.includes(input[i])) {
            specialChar = true;
        }
    }

    let strength = "Weak";
    if (hasLower && hasUpper && hasDigit && specialChar && input.length >= 8) {
        strength = "Strong";
    } else if ((hasLower || hasUpper) && specialChar && input.length >= 6) {
        strength = "Moderate";
    }

    console.log(`Strength of password: ${strength}`);
}

const input = "Kembar@2312";
strongPassword(input);
