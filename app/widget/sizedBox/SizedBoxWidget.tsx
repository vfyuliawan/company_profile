interface SizeboxInterface {
    top?: string
    bottom?: string
    left?: string,
    raight? : string
}

const WidgetSizeBox = (props : SizeboxInterface) => {
    return ( 
        <div style={{marginTop:props.top ?? '1px', marginBottom:props.top ?? '1px', marginLeft:props.left ?? '1px', marginRight:props.raight?? '1px' }}></div>
     );
}
 
export default WidgetSizeBox;