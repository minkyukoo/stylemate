import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: false
});

export default Toast;
