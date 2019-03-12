import { Injectable } from '@angular/core';
@Injectable()
export class MessagesService {

    showMessage: boolean;
    message: string;
    type: string;
    img: string;
    color: string;
    title: string;

    public showMsg(title: string, message: string, type: string): void {
        this.message = message;
        this.type = type;
        const style = this.getStyle(type);
        this.img = style.img;
        this.color = style.color;
        this.title = title;
        this.showMessage = true;
    }

    public closeMsg(): void {
        this.showMessage = false;
    }

    private getStyle(type: string): any {
        switch (type) {
            case 'success':
                return { img: 'assets/img/icons/success.png', color: '#7ed321' };
            case 'error':
                return { img: 'assets/img/icons/error.png', color: '#f34442' };
            case 'info':
                return { img: 'assets/img/icons/warning.png', color: '#ffa500' };
        }
    }
}
