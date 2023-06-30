document.addEventListener('alpine:init', () => {
    Alpine.data ("transportfareWidget", function() {
     return   { 
        messagefare: '',
        fare: '',
        showGreeting : false,
        fare1(){
        this.messagefare = transportFee(this.fare);
    
        setTimeout(() => {
            this.messagefare = '';
        }, 3000);
    }
    }
    }  );
})