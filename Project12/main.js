;
(function(Vue) {
    const User = {
        template: `
    <div class="content">
      User
      <span>
        <router-link to="/user">UserHome</router-link>
        <router-link to="/user/profile">profile</router-link>
        <router-link to="/user/post">post</router-link>
      </span>
      <router-view></router-view>
    </div>`
    }
    const UserHome = {
        template: `<div class="content">UserHome</div>`
    }
    const Profile = {
        template: `<div class="content">Profile</div>`
    }
    const Post = {
        template: `<div class="content">Post</div>`
    }
    const Home = {
        template: `<div class="content">Home</div>`
    }
    const Page1 = {
        template: `<div class="content">Page 1</div>`,
    }
    const Page2 = {
        template: `<div class="content">Page 2</div>`,
    }
    const error = {
        template: `<div>404</div>`,
    }
    const router = new VueRouter({
        routes: [{
            path: '/',
            component: Home,
            name: 'home'
        }, {
            path: '/page1',
            component: Page1,
            name: 'page1'
        }, {
            path: '/page2',
            component: Page2,
            name: 'page2'
        }, {
            path: '/user',
            component: User,
            children: [{
                path: "",
                component: UserHome,
                name: 'userhome'
            }, {
                path: "profile",
                component: Profile,
                name: 'profile'
            }, {
                path: "post",
                component: Post
            }]
        }, {
            path: '/404',
            component: error
        }, , {
            path: '*',
            redirect: '/404'
        }]
    })

    const vm = new Vue({
        el: '#app',
        router,
        data() {
            return {
                show: 0
            }
        },
        methods: {
            ClickHandler() {
                this.$router.push('/user')
                    // this.$router.replace('/user')
            },
            // PageUpHandler() {
            //     this.$router.go(-1)
            // },
            // PageDownHandler() {
            //     this.$router.go(1)
            // }
        },

    })
})(Vue)