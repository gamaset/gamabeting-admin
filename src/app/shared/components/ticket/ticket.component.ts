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
    id: 1,
    hashId: "BETFCIPHYMOCSWIN",
    totalOdd: 33.074999999999996,
    betValue: 10,
    profit: 330.75,
    expectedValueDiscountCommission: 297.67,
    commissionPercent: 0.1,
    commissionValue: 33.08,
    status: {
      id: 1,
      description: "REGISTRADA"
    },
    createdDate: "03-03-2019 03:03:16",
    updatedDate: "07-03-2019 09:32:48",
    customer: {
      createAt: "03-03-2019 03:03:03",
      updateAt: "03-03-2019 03:03:03",
      id: 1,
      user: {
        createAt: "03-03-2019 03:03:03",
        updateAt: "03-03-2019 03:03:03",
        id: 6,
        name: "Sandro Guedes",
        email: "sandrao@hotmail.com",
        username: "1551636183006",
        taxId: "41236557851"
      },
      agent: {
        createAt: "03-03-2019 02:58:07",
        updateAt: "03-03-2019 02:58:07",
        id: 3,
        name: "Fernando Martins",
        email: "martins12@live.com",
        username: "martins12",
        taxId: "41236557850"
      }
    },
    events: [
      {
        id: 1,
        eventId: 29141141,
        eventName: "Bordeaux v Montpellier",
        eventDate: "",
        competition: {
          id: 55,
          description: "França - Ligue 1",
          countryCode: "FRA"
        },
        market: {
          id: 131,
          marketId: "1.155171557",
          marketName: "Match Odds",
          marketSelection: {
            selectionId: 44797,
            selectionName: "Montpellier",
            odd: 3.15
          }
        }
      },
      {
        id: 2,
        eventId: 29149505,
        eventName: "Sporting Lisbon v Portimonense",
        eventDate: "",
        competition: {
          id: 99,
          description: "Portugal - Primeira liga",
          countryCode: "PRT"
        },
        market: {
          id: 132,
          marketId: "1.155446635",
          marketName: "Match Odds",
          marketSelection: {
            selectionId: 505982,
            selectionName: "Portimonense",
            odd: 10.5
          }
        }
      }
    ]
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
