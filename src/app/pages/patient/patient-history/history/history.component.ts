import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../services/history-service/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private sortBy = 'newest';
  private pageIndex = 0;
  private totalPages;
  private data;

  private historyDelete;

  private open_confirm = false;

  private messageConfirm = 'Are you sure to remove this result!';

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getData(this.pageIndex, this.sortBy);
  }

  public getData(pageIndex, sortBy) {
    this.historyService.getHistories(pageIndex, sortBy).subscribe(data => {
      console.log(data);
      this.totalPages = new Array(data.totalPages);
      this.pageIndex = data.currentPage;
      this.data = data.result;

    });
  }

  public parseToList(result:string){
    return JSON.parse(result) as Array<String>;
  }

  public changeSortBy(value) {
    this.sortBy = value;
    this.getData(this.pageIndex, this.sortBy);
  }

  public changePage(value) {
    this.pageIndex = value;
    this.getData(this.pageIndex, this.sortBy);
  }

  public confirmDelete(value) {
    this.historyDelete = value;
    this.open_confirm = !this.open_confirm;
  }

  public setOpenConfirm(value) {
    this.open_confirm = value;
  }

  public deleteHistory() {
    this.historyService.deleteHistory(this.historyDelete.id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    }, error => {
      console.log(error);
    })

  }
}
