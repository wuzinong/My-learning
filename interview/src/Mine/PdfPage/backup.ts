const exportToPdfCanvas = (e) => {
  e = e || window.event;
  e.preventDefault();

  const pdfName = `Test Report.pdf`;
  const elem = pdfelem.current ?? new HTMLElement();
  const height = Math.max(elem.scrollHeight + 150, window.innerHeight);
  const elementHeights = [];
  console.log(
    `${elem.scrollHeight}----window.innerHeight： ${window.innerHeight}---${height}`
  );

  const options = {
    allowTaint: true, //Whether to allow cross-origin images to taint the canvas
    useCORS: true, //Whether to attempt to load images from a server using CORS
    ignoreElements: (element) => false, //Predicate function which removes the matching elements from the render.
    logging: false,
    backgroundColor: '#F9F9F9',
    windowHeight: height,
    // windowWidth: 100,
    // width: 200,
    // height: 1333
    onclone: (cloneDoc: any) => {
      cloneDoc.getElementById('mytitle').style.fontSize = '40px';
      cloneDoc.getElementById('mytitle').style.color = 'red';
      // [...cloneDoc.querySelectorAll('.infogroup > label')].forEach(
      //   (ele) => (ele.style.fontSize = '17px')
      // );

      const lastElement = cloneDoc.querySelector('#mypdf').lastElementChild;
      // elementHeights = getElementHeights(reportEle);
    },
  };

  html2canvas(elem, options).then((canvas) => {
    document.body.appendChild(canvas);

    // //OLD IMPLEMENTATION
    const pdf = new jsPDF('p', 'pt', 'a4');
    const PDF_Width = pdf.internal.pageSize.getWidth();
    const PDF_Height = pdf.internal.pageSize.getHeight();
    const ratio = canvas.width / PDF_Width;
    const CANVAS_Width = PDF_Width;
    const CANVAS_Height = canvas.height / ratio;
    //const CANVAS_Height = canvas.height;
    const scale = window.devicePixelRatio; //canvas.width / ((reportEle as HTMLElement).offsetWidth + 60);
    console.log(
      `PDF_Width: ${PDF_Width} PDF_Height: ${PDF_Height} ratio:${ratio} CANVAS_Width：${CANVAS_Width} CANVAS_Height:${CANVAS_Height} scale:${scale}`
    );

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 0, 0, CANVAS_Width, CANVAS_Height);
    // pdf.save(pdfName);

    const totalPage = Math.ceil(CANVAS_Height / PDF_Height);
    console.log(totalPage);
    new Array(totalPage).fill(1).forEach((v, i) => {
      pdf.addPage('a4');
      // pdf.addImage(imgData, 0, 0, CANVAS_Width, PDF_Height);
      pdf.addImage(imgData, 0, i * PDF_Height, CANVAS_Width, PDF_Height);
    });
    pdf.save(pdfName);
    // // END OLD IMPLEMENTATION

    //https://stackoverflow.com/questions/22991086/how-to-display-an-image-in-two-pages-in-pdf-using-jspdf
  });
};
