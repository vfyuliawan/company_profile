interface ParagrafListInterface {
    idDoc: string
    paragraf1:string
    paragraf2:string
    paragraf3:string
    paragraf4:string
}

interface ParagrafListInterfaceForm {
    paragraf1: ParagrafContaintInterface
    paragraf2: ParagrafContaintInterface
    paragraf3: ParagrafContaintInterface
    paragraf4: ParagrafContaintInterface

}

interface ParagrafContaintInterface {
    content: string
    hintText?: boolean
}