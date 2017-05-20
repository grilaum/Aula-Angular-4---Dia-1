export class HoraAtualService {

  private dateAgora: String;

  private getAgora(): String {
    let currentdate = new Date;
    let datetime = currentdate.getHours() + ":"  
                 + currentdate.getMinutes() + ":" 
                 + currentdate.getSeconds(); 
      
    return datetime;
  }

  generateHoraAtual(delay: number, callback: (dateAgora: String) => void) {
    callback(this.getAgora());
    setInterval(() => callback(this.getAgora()), delay);
  }

}