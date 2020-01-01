import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    board = new Array(4);
    t1 = performance.now();
    zx: any;
    zy: any;
    clicks: any = 0;
    possibles: any;
    clickCounter: any;
    oldzx: any = -1;
    oldzy: any = -1;
    time_duration: any = 0;
    isStart:any = false;
    constructor() {
        this.start();
    }
    
    startClick() {
        this.time_duration = 300;
        this.isStart = true;
    }

    endClick() {
        this.time_duration = 0;
        this.isStart = false;
        this.restart();
        this.clicks = 0;
        this.clickCounter.innerHTML = "Clicks: " + this.clicks;
    }

    createBoard() {
        for (var i = 0; i < 4; i++) {
            this.board[i] = new Array(4);
        }
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                this.board[i][j] = (i + j * 4) + 1;
            }
        }
        this.zx = 3;
        this.zy = 3;
        this.board[this.zx][this.zy] = 16;
    }
    createBtns() {
        var b, d = document.createElement("div");
        d.className += "board";
        document.body.appendChild(d);
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                b = document.createElement("button");
                b.id = "btn" + (i + j * 4);
                b.i = i; b.j = j;
                b.addEventListener("click", (evt) => this.btnHandle(evt), false);
                b.appendChild(document.createTextNode(""));
                d.appendChild(b);
            }
        }
        this.clickCounter = document.createElement("p");
        this.clickCounter.className += "txt";
        document.body.appendChild(this.clickCounter);
    }

    start() {
        this.createBtns();
        this.createBoard();
        this.restart();
    }

    restart() {
        this.shuffle();
        let clicks = 0;
        this.updateBtns();
    }

    checkFinished() {
        var a = 0;
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                if (this.board[i][j] < a) return false;
                a = this.board[i][j];
            }
        }
        return true;
    }
    getPossibles() {
        var ii, jj, cx = [-1, 0, 1, 0], cy = [0, -1, 0, 1];
        this.possibles = [];
        for (var i = 0; i < 4; i++) {
            ii = this.zx + cx[i]; jj = this.zy + cy[i];
            if (ii < 0 || ii > 3 || jj < 0 || jj > 3) continue;
            this.possibles.push({ x: ii, y: jj });
        }
    }

    updateBtns() {
        var b, v, id;
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 4; i++) {
                id = "btn" + (i + j * 4);
                b = document.getElementById(id);
                v = this.board[i][j];
                if (v < 16) {
                    b.innerHTML = ("" + v);
                    b.className = "button"
                }
                else {
                    b.innerHTML = ("");
                    b.className = "empty";
                }
            }
        }
        this.clickCounter.innerHTML = "Clicks: " + this.clicks;
    }

    btnHandle(e) {
        this.getPossibles();
        var c = e.target.i, r = e.target.j, p = -1;
        for (var i = 0; i < this.possibles.length; i++) {
            if (this.possibles[i].x == c && this.possibles[i].y == r) {
                p = i;
                break;
            }
        }
        if (p > -1) {
            this.clicks = this.clicks + 1;
            var t = this.possibles[p];
            this.board[this.zx][this.zy] = this.board[t.x][t.y];
            this.zx = t.x; this.zy = t.y;
            this.board[this.zx][this.zy] = 16;
            this.updateBtns();
            if (this.checkFinished()) {
                setTimeout(function () {
                    alert("WELL DONE!");
                    this.restart();
                }, 1);
            }
        }
    }
    shuffle() {
        var v = 0, t;
        do {
            this.getPossibles();
            while (true) {
                t = this.possibles[Math.floor(Math.random() * this.possibles.length)];
                console.log(t.x, this.oldzx, t.y, this.oldzy)
                if (t.x != this.oldzx || t.y != this.oldzy) break;
            }
            this.oldzx = this.zx;
            this.oldzy = this.zy;
            this.board[this.zx][this.zy] = this.board[t.x][t.y];
            this.zx = t.x;
            this.zy = t.y;
            this.board[this.zx][this.zy] = 16;
        } while (++v < 200);
    }
}
