<style scoped>
    .wrapper {
        border-radius: 5px;
        border: 3px dashed #ddd;
        line-height: 24px;
        padding: 12px;
    }
</style>

<template>
    <section>
        <h3>Auto height transition</h3>
        <p>This transition is used to smoothly swap elements of different heights. By default, the outgoing element will fade out while the entering element fades in.</p>
   
        <div class="toolbar">
            <a href="#" @click.prevent="foo = !foo">Toggle</a>
        </div>

        <div class="wrapper">
            <v-auto-height-transition>
                <div v-if="foo" key="short">
                    <div>Just go out and talk to a tree. Make friends with it. The man who does the best job is the one who is happy at his job. What the devil. Just think about these things in your mind - then bring them into your world.</div>
                </div>
                <div v-else key="tall">
                    <div>I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Let's make a nice big leafy tree. We wash our brush with odorless thinner. Use what you see, don't plan it. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart.</div>
                    <div>Let's put some happy little clouds in our world. It's beautiful - and we haven't even done anything to it yet. You can create beautiful things - but you have to see them in your mind first. In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home, the only thing I have power over is the garbage. This is truly an almighty mountain. We'll put all the little clouds in and let them dance around and have fun.</div>
                </div>
            </v-auto-height-transition>
        </div>    
    </section>
</template>

<script>
export default {
    data() {
        return {
            foo: true,
        }
    }
}
</script>