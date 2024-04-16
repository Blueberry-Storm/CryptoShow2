document.addEventListener('DOMContentLoaded', function() {
    const devices = [
        { name: 'Quantum Cryptography Set', description: 'Ensure unbreakable encryption with state-of-the-art quantum cryptography technology.', imgUrl: 'path-to-quantum.jpg' },
        { name: 'Encrypted USB Drive', description: 'Portable, secure data storage with military-grade encryption.', imgUrl: 'path-to-usb.jpg' },
        { name: 'Blockchain Smartphone', description: 'A smartphone built with blockchain technology for enhanced security and data protection.', imgUrl: 'path-to-smartphone.jpg' }
        // More devices can be added here
    ];

    const gridContainer = document.querySelector('.grid');

    devices.forEach(device => {
        const card = document.createElement('div');
        card.className = 'device-card';
        card.innerHTML = `
            <img src="${device.imgUrl}" alt="${device.name}" style="width:100%; height:200px; object-fit: cover;">
            <h3>${device.name}</h3>
            <p>${device.description}</p>
        `;
        gridContainer.appendChild(card);
    });
});
