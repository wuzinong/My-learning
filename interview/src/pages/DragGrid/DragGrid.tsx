import './draggrid.css';
import { useEffect, useRef, useState } from 'react';

type datatype = { span: number; text: number };

export default function App() {
  const wrapper = useRef(null);

  const [myarr, setArr] = useState<datatype[]>([
    { span: 2, text: 0 },
    { span: 2, text: 1 },
    { span: 2, text: 2 },
    { span: 2, text: 3 },
    { span: 4, text: 4 },
    { span: 2, text: 5 },
    { span: 3, text: 6 },
    { span: 2, text: 7 },
    { span: 2, text: 8 },
    { span: 2, text: 9 },
    { span: 4, text: 10 },
    { span: 5, text: 11 },
    { span: 2, text: 12 },
    { span: 2, text: 13 },
    { span: 2, text: 14 },
  ]);
  const reorderArr = (arr: datatype[]) => {
    setArr([...arr]);
  };
  const regenerateArr = (arr: datatype[], source: number, target: number) => {
    const newArray = [...arr];

    if (Math.abs(target - source) === 1) {
      //take this as a swap scenario
      let temp = newArray[source];
      newArray[source] = newArray[target];
      newArray[target] = temp;
    } else {
      const [movedElement] = newArray.splice(source, 1);
      if (source > target) {
        //moving forward should increase the index
        target++;
      }

      newArray.splice(target, 0, movedElement);
    }

    reorderArr(newArray);
  };

  useEffect(() => {
    function dragStartListener(event) {
      if (event.target.classList.contains('draggable')) {
        event.stopPropagation();
        // Set the data to be dragged (here, we use the ID of the dragged element)
        event.dataTransfer.setData('srouceId', event.target.id);
      }
    }

    function dropListener(event) {
      event.preventDefault();
      const sourceIndex = event.dataTransfer.getData('srouceId');
      const target = event.target;
      const targetIndex = target.id;
      regenerateArr(myarr, Number(sourceIndex), Number(targetIndex));
    }

    function dragOverListener(event) {
      event.preventDefault();
    }
    if (wrapper.current) {
      //remove the previous ones
      wrapper.current.removeEventListener('dragstart', dragStartListener);
      wrapper.current.removeEventListener('drapover', dragOverListener);
      wrapper.current.removeEventListener('drop', dropListener);

      //add new listener
      wrapper.current.addEventListener('dragstart', dragStartListener);
      wrapper.current.addEventListener('dragover', dragOverListener);
      wrapper.current.addEventListener('drop', dropListener);
    }

    return () => {
      if (wrapper.current) {
        wrapper.current.removeEventListener('dragstart', dragStartListener);
        wrapper.current.removeEventListener('drapover', dragOverListener);
        wrapper.current.removeEventListener('drop', dropListener);
      }
    };
  }, [myarr]);
  return (
    <div>
      <div className='gridlayout' ref={wrapper}>
        {myarr.map((v, i) => {
          return (
            <div
              id={`${i}`}
              draggable={true}
              className={`grid-column-${v.span} draggable`}
            >
              {v.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
