function likeOrDislike(buttons) {
    let arr = []
    let result = ''
  
    if (buttons.length === 0) return Nothing
    else if (buttons.length === 1 )return buttons[0]
    
    for (let i = 0; i < buttons.length - 1; i++){
      buttons[i+1] = buttons[i] === buttons[i+1] ? 'Nothing' : buttons[i+1]
    }
    return buttons[buttons.length -1]
  
}