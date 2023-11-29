import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  submitForm() {
    // Handle form submission logic here
    alert('Form submitted successfully!');

    // Show the animation container
    const animationContainer = document.getElementById('animation-container');
    if (animationContainer) {
      animationContainer.style.display = 'block';

      // Hide the animation after 4 seconds
      setTimeout(() => {
        animationContainer.style.display = 'none';
      }, 4000);
    }
  }
}