// BEGIN
function getX(){
    return this.x
}

function getY(){
    return this.y
}

function getBeginPoint(){
    return this.beginPoint
}

function getEndPoint(){
    return this.endPoint
}
function Point(x,y) {
    this.x = x
    this.y = y
    this.getX = getX
    this.getY = getY
}

function Segment(beginPoint, endPoint){
    this.beginPoint = beginPoint
    this.endPoint = endPoint
    this.getBeginPoint = getBeginPoint
    this.getEndPoint = getEndPoint
}

function reverse(segment1){
     return new Segment(
        new Point(
            segment1.getEndPoint().getX(),
            segment1.getEndPoint().getY()
        ),
        new Point(
            segment1.getBeginPoint().getX(),
            segment1.getBeginPoint().getY()
        ))
}

export{getX, getY, getBeginPoint, getEndPoint, Point, Segment, reverse}
// END
