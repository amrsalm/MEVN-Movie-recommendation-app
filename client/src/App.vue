<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      class="yellow "
      app
    >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
        </v-list-item-title>
        <v-list-item-subtitle>
         
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider>
    </v-divider>
    <v-list dense>
      
      <v-list-item-group
        
        
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
          color="black"
        >
          <v-list-item-icon color="black" >
            <v-icon color="black black--text" v-text="item.icon"></v-icon>
          </v-list-item-icon >
          <v-list-item-content color="black">
            <v-list-item-title color="black--text" v-text="item.text"></v-list-item-title>
          </v-list-item-content >
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </v-navigation-drawer>

    <v-app-bar class="black" app>
      <v-app-bar-nav-icon  class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold yellow--text" > Movie Reviews App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'Home', icon: 'mdi-home', link:"/"},
        { text: 'Add Post', icon: 'mdi-plus', link:"/add-post" },
        { text: 'About', icon: 'mdi-information',link:"/about" },
      ],
       drawer: null 

      }),
  }
</script>