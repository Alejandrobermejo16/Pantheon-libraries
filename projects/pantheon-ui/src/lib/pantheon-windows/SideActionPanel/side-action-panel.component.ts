import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from './interface';

@Component({
  selector: 'pantheon-side-action-panel',
  templateUrl: './side-action-panel.html',
  styleUrls: ['./side-action-panel.component.scss']
})
export class SideActionPanelComponent {
  @Input() open = false;
  @Input() actions: Action[] = [];
  @Output() close = new EventEmitter<void>();

  createStars(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    
    console.log('🌟 Creating stars at', { startX, startY });
    
    for (let i = 0; i < 6; i++) {
      const star = document.createElement('div');
      star.style.position = 'fixed';
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.width = '8px';
      star.style.height = '8px';
      star.style.borderRadius = '50%';
      star.style.background = 'radial-gradient(circle, #fbbf24 0%, #f59e0b 50%)';
      star.style.boxShadow = '0 0 8px rgba(251, 191, 36, 1)';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '10000';
      
      const offsetX = Math.random() * 100 - 50;
      const offsetY = Math.random() * 100 - 50;
      
      document.body.appendChild(star);
      console.log('⭐ Star added to body at', { startX, startY });
      
      // Animar con requestAnimationFrame para mejor visibilidad
      let elapsed = 0;
      const duration = 1500;
      
      const animate = () => {
        elapsed += 16;
        const progress = elapsed / duration;
        
        star.style.transform = `translate(${offsetX * progress}px, ${offsetY * progress}px) scale(${1 - progress})`;
        star.style.opacity = `${1 - progress}`;
        
        if (elapsed < duration) {
          requestAnimationFrame(animate);
        } else {
          star.remove();
        }
      };
      
      animate();
    }
  }

  handleAction(event: MouseEvent, action: Action) {
    this.createStars(event);
    action.callback();
  }
}
