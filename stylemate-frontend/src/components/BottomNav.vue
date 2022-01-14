<template>
  <div class="bottom-nav">
    <ul class="nav">
      <li class="nav-item" v-for="(item,i) of menuitems" :key="item.id || i + 1">
        <router-link :to="`${item.path}`" class="nav-link">
          <i class="icon" v-html="`${item.icon}`"></i>
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      menuitems: [
        {
          id: 1,
          path: '/home',
          title: 'Home',
          icon: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0304 20.7893 21.5391 20.4142 21.9142C20.0391 22.2893 19.5304 22.5 19 22.5H5C4.46957 22.5 3.96086 22.2893 3.58579 21.9142C3.21071 21.5391 3 21.0304 3 20.5V9.5Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 22.5V12.5H15V22.5" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
        },
        {
          id: 2,
          path: '/item',
          title: 'Item',
          icon: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 2.33325L3 6.33325V20.3333C3 20.8637 3.21071 21.3724 3.58579 21.7475C3.96086 22.1225 4.46957 22.3333 5 22.3333H19C19.5304 22.3333 20.0391 22.1225 20.4142 21.7475C20.7893 21.3724 21 20.8637 21 20.3333V6.33325L18 2.33325H6Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 6.33325H21" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 10.3333C16 11.3941 15.5786 12.4115 14.8284 13.1617C14.0783 13.9118 13.0609 14.3333 12 14.3333C10.9391 14.3333 9.92172 13.9118 9.17157 13.1617C8.42143 12.4115 8 11.3941 8 10.3333" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
        },
        {
          id: 3,
          path: '/brand',
          title: 'Brand',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.5373 14.0893L13.9425 21.6862C13.7457 21.8832 13.5121 22.0395 13.2549 22.1462C12.9977 22.2528 12.722 22.3077 12.4436 22.3077C12.1652 22.3077 11.8895 22.2528 11.6323 22.1462C11.3751 22.0395 11.1415 21.8832 10.9447 21.6862L1.8457 12.5954V2H12.4383L21.5373 11.1014C21.9319 11.4985 22.1534 12.0355 22.1534 12.5954C22.1534 13.1552 21.9319 13.6923 21.5373 14.0893V14.0893Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7 7H7.01" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
        },
        {
          id: 4,
          path: '/contens',
          title: 'Contents',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 3H3V10H10V3Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 3H14V10H21V3Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 14H14V21H21V14Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10 14H3V21H10V14Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
        },
        {
          id: 5,
          path: '/mypage',
          title: 'My page',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  .nav {
    @include flex-align-center;
    justify-content: space-between;
    padding: 17px 19px 15px;
    width: 100%;
    .nav-item {
      .nav-link {
        @include flex-column-align-center;
        font-family: $default-font;
        font-style: normal;
        font-weight: bold;
        font-size: 9px;
        line-height: 9px;
        color: $grey-3;
        text-transform: uppercase;
        width: 38px;
        .icon {
          margin-bottom: 6px;
          svg {
              path {
                stroke: $white-1;
              }
            }
        }
        &.router-link-active {
          color: $white-1;
          .icon {
            svg {
              path {
                stroke: $white-1;
              }
            }
          }
        }
      }
    }
  }
}
</style>