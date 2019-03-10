class UIPanel extends UIAbstractWindow {    

  constructor(title) { 
    let winRect = NSMakeRect(490, 420, 400, 80)
    let window = NSWindow.alloc().initWithContentRect_styleMask_backing_defer(winRect,NSWindowStyleMaskTitled|NSWindowStyleMaskFullSizeContentView,NSBackingStoreBuffered,true)
    window.title = title

    let contRect = window.contentLayoutRect()
    
    super(window, contRect)
    window.setContentView(this.container)

    window.ReleasedWhenClosed = true;
  }


  show(){
    this.window.makeKeyAndOrderFront( this.window )
  }

  finish(){
    log('closing...')
    this.window.orderOut(null)    
    
    //this.window.close()    // close() crashes Sketch
    log('closed')
    this.window = null
  }

}
