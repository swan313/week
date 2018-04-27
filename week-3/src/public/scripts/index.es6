import css from '../css/index.css';

class PraiseButton {
  constructor(num, element) {

  }

  clickAction() {
    axios.get('/index/update')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


    /*this.element.click(() => {
      if(f){
        clearTimeout(f);
      }
      f=setTimeout(()=>{
        if (this.num < 10) {
          this.element.css('-webkit-filter', 'grayscale(0)');
          $('#animation').addClass('num');
          this.num = add(this.num);
          setTimeout(function () {
            $('#animation').removeClass('num');
          }, 1000);
          axios.get('/index/update')
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

        } else {
          this.element.css('-webkit-filter', 'grayscale(1)');
          this.num = 0;
        }
        console.log(this.num);
      },800);

    });*/
  }
}

export default PraiseButton

