const categories = {
    'Regular BSc in Cybersecurity and Digital Forensics': '524016',
    'Regular Diploma in Cybersecurity': '324016',
    'Regular BSc in Information Technology Education': '524010',
    'Regular Diploma in Information Technology': '324017',
    'Evening BSc in Information Technology': '524020',
    'Weekend BSc in Information Technology': '524021',
    'Regular Post-Diploma in Information Technology': '424020'
};

const classRanges = {
    'A': [0, 100],
    'B': [101, 200],
    'C': [201, 300],
    'D': [301, 400],
    'E': [401, 500],
    'F': [501, 600],
    'G': [601, 700],
    'H': [701, 800],
    'I': [801, 900],
    'J': [901, 1000],
    'K': [1001, 1100],
    'L': [1101, 1200],
    'M': [1201, 1300],
    'N': [1301, 1400],
    'O': [1401, 1500]
};

// Define WhatsApp group links for each category and class
const whatsappGroups = {
    '524016': {
        'A': 'https://chat.whatsapp.com/F5g4wHRQyTGDB0qTUl1QiY',
        'B': 'https://chat.whatsapp.com/CkyBttdRaty8pCH40LYIKt',
        'C': 'https://chat.whatsapp.com/FssaqeAFU1O4XfFykID05q',
        'D': 'https://chat.whatsapp.com/FssaqeAFU1O4XfFykID05q'
    },
    '324016': {
        'A': 'https://chat.whatsapp.com/E3p3B25G06ABlxdaRSS3of',
        'B': 'https://chat.whatsapp.com/E3p3B25G06ABlxdaRSS3of',
        'C': 'https://chat.whatsapp.com/E3p3B25G06ABlxdaRSS3of'
    },
    '524010': {
        'A': 'https://chat.whatsapp.com/CjVDReQ1lh8JQHaX6KsgvJ',
        'B': 'https://chat.whatsapp.com/CMazErWeB24Fk8g1S5jVKP',
        'C': 'https://chat.whatsapp.com/CgJ8fFnHXF21GO97ohduzz',
        'D': 'https://chat.whatsapp.com/J4tjSPIrRCrC9RXz4CNwe8',
        'E': 'https://chat.whatsapp.com/LqtIwqQPiK81LCRfQzYGbG',
        'F': 'https://chat.whatsapp.com/HR7xbPEmPTCD5KvwLEdz5D',
        'G': 'https://chat.whatsapp.com/Bzy4RpLC7utBY3hZYh0FGF',
        'H': 'https://chat.whatsapp.com/BCi58E4Lo9H6jBIUyeI2Xv',
        'I': 'https://chat.whatsapp.com/GOFjKlu5vjlA3gO6ngjmA7',
        'J': 'https://chat.whatsapp.com/KgHUxXTViX4CzPM8L1Tg89',
        'K': 'https://chat.whatsapp.com/GVmZWbgRsve4EN3zKC2BKV',
        'L': 'https://chat.whatsapp.com/LvjcmafbakL8HlU96rOTlI',
        'M': 'https://chat.whatsapp.com/IUA6KdzgyfAKUf9AyItENk',
        'N': 'https://chat.whatsapp.com/HNO2PepbbMHCRO7GwjYpYA',
        'O': 'https://chat.whatsapp.com/BaF055VzNrNBiAcdTZyx3Z'
    },
    '324017': {
        'A': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM',
        'B': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM',
        'C': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM'
    },
    '524020': {
        'A': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM',
        'B': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM',
        'C': 'https://chat.whatsapp.com/CJFWPSBB76x69XcDyQXsvM'
    },
    '524021': {
        'A': 'https://chat.whatsapp.com/EDDCXzJ8Fnl739N5J8oGzT',
        'B': 'https://chat.whatsapp.com/EDDCXzJ8Fnl739N5J8oGzT',
        'C': 'https://chat.whatsapp.com/EDDCXzJ8Fnl739N5J8oGzT'
    },
    '424020': {

    }
};

function checkClass() {
    const input = document.getElementById('indexNumber').value;
    const resultElement = document.getElementById('result');

    if (input.length !== 10) {
        resultElement.innerHTML = 'Index number must be 10 digits long.';
        return;
    }

    const prefix = input.substring(0, 6);
    const suffix = parseInt(input.substring(6), 10);

    let category = 'Unknown';
    let classGroup = 'Unknown';

    // Determine the category
    for (let key in categories) {
        if (categories[key] === prefix) {
            category = key;
            break;
        }
    }

    // Determine the class
    for (let range in classRanges) {
        if (suffix >= classRanges[range][0] && suffix <= classRanges[range][1]) {
            classGroup = range;
            break;
        }
    }

    // Generate WhatsApp link
    let whatsappLink = '';
    if (category !== 'Unknown' && classGroup !== 'Unknown') {
        whatsappLink = whatsappGroups[prefix]?.[classGroup] || '';
    }

    // Display the result
    if (whatsappLink) {
        resultElement.innerHTML = 'Category: ' + category + '<br>';
        resultElement.innerHTML += 'Class: ' + classGroup + '<br>';
        resultElement.innerHTML += '<a href="' + whatsappLink + '" target="_blank" class="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-4">Join \'' + classGroup + '\' Class WhatsApp Group</a>';
    } else {
        resultElement.innerHTML = 'Could not find a matching WhatsApp group.';
    }
}
