import { Directive,ElementRef } from '@angular/core';
const $: any = (window as any).$;


@Directive({
    selector: '[appModalDragDirective]'
})
export class ModalDragDirectiveDirective {


    $elem:any;
    dragStart:boolean = false;
    //鼠标相对于div的位置
    mouseDivOffset:any = {};
    ngOnInit() {
        console.log(this.$elem)

    }
    ngAfterViewInit(){
        this.divMouseDown();
        this.divMouseUp();
        this.documentMouseMove();
        this.documentMouseUp();
    }

    divMouseDown() {
        let that = this;
        let divOffsetTop = this.$elem.offset().top;
        let divOffsetLeft = this.$elem.offset().left;
        this.$elem.mousedown(function(event){
            let e = event || window.event;
            that.dragStart = true;
            that.mouseDivOffset.left = e.clientX - divOffsetLeft;
            that.mouseDivOffset.top = e.clientY - divOffsetTop;
        })
    }

    divMouseUp() {
        let that = this;
        this.$elem.mouseup(function(){
            that.dragStart = false;
        })
    }

    setDivOffset(context,event) {
        let that = context;
        let e = event || window.event;
        if (that.dragStart && that.$elem) {
            that.$elem.offset({left:e.clientX - that.mouseDivOffset.left,top:e.clientY - that.mouseDivOffset.top});
        }
    }

    documentMouseMove() {
        let that = this;
        let timer = null;
        $(document).mousemove(function (event) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(that.setDivOffset(that,event),100)
        })
    }

    documentMouseUp(){
        let that = this;
        $(document).mouseup(function () {
            that.dragStart = false;
        })
    }

    constructor(private el:ElementRef) {
        this.$elem = $(el.nativeElement)
    }

}
