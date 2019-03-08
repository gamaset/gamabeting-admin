import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  templateUrl: 'ticket.component.html',
  styleUrls: ['ticket.component.scss']
})
export class TicketComponent {

  tickets = {
    id: 3,
    hashId: 'BETBKU4TNX3LLWIN',
    customer: {
      createAt: '02-03-2019 08:29:55',
      updateAt: '02-03-2019 08:29:55',
      id: 1,
      user: {
        createAt: '02-03-2019 08:29:55',
        updateAt: '02-03-2019 08:29:55',
        id: 5,
        name: 'Sandro Guedes',
        email: 'sandra@gmail.com',
        username: '1551569394787',
        taxId: '41236557858'
      },
      agent: {
        createAt: '02-03-2019 04:08:04',
        updateAt: '02-03-2019 04:08:04',
        id: 4,
        name: 'Fernando Martins',
        email: 'martins12@gmail.com',
        username: 'martins12',
        taxId: '41236554567'
      }
    },
    betValue: 900,
    expectedValueDiscountCommission: 3458.7,
    commissionValue: 384.3,
    commissionPercent: 0.1,
    profit: 3843,
    totalOdd: 4.27,
    status: 0,
    events: [
      {
        competition: 'Inglaterra - Championship',
        eventDescription: 'Norwich x Birmingham',
        eventDate: null,
        marketDescription: 'Probabilidades',
        odd: 2.44
      },
      {
        competition: 'Portugal - Primeira liga',
        eventDescription: 'Nacional x Braga',
        eventDate: null,
        marketDescription: 'Probabilidades',
        odd: 1.75
      }
    ],
    createdDate: '02-03-2019 11:21:56',
    updatedDate: '02-03-2019 11:21:56'
  };
  constructor() {
  }

  public donwloadPDF(): void {
    html2canvas(document.querySelector('#ticket')).then(canvas => {

      const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
      pdf.save(`${this.tickets.hashId}.pdf`);

    });
  }
}
