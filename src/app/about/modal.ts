import { Component, Input } from '@angular/core';

@Component({
    selector: 'modaly-component',
    templateUrl: 'modals.html'
})

export class ModalsComponent {

    @Input() typy;
    @Input() title;
    
    license = "Zeze is in the forefront of making your song more than just another song by venturing into the wide scope of the use of your song. As our digital distribution client you get the exclusive chance of having your music pitched to supervisors all over for placement on advertisement retails ,TV shows ,promos and film. We explore all possible means for you to earn revenue and exploit the music expanding the mainstream reach and thus increasing revenue. Let us look for ways to make your music more than just a song, be a theme song. How? We negotiate deals on your behalf even those that you never knew existed . We create avenues that will make royalties in will stream straight into your hands with the touch of a button. Zeze Music Publishing Administration licenses and registers your music globally and helps you collect earned royalties .";
    
    rights = "When your music is performed in ,terrestrial radio, tv shows ,movies or advertisement , the master rights owner receives neighboring right revenue for synchronization, distribution and reproduction . Here at zeze we offer an exclusive service by working with top labels and our artists to register the sound recordings and collect the neighboring rights royalties from neighboring rights collection ";
    
    ntwk = "Zeze reaches far and wide with connections from various sites that ensure your music is heard everywhere. Our network becomes your network and our best your best. Zeze networking, making sure you meet the right people."
    

}
