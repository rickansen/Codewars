const validPhoneNumber = phoneNumber => phoneNumber.length === 14 && /(\([\d]{3}\)) ([\d]{3})-([\d]{4})/.test(phoneNumber)
