<script setup>
const sectionRef = ref(null)
sectionRef.value = [
    {
        id: 1,
        alt: "盛放的桃花",
        url: 'https://i0.hdslb.com/bfs/new_dyn/b87d684f070cb0d7b5533e79c93fc296382382112.jpg@1920w_1080h_1e_1c.webp',
    },
    {
        id: 2,
        alt: "盛放的桃花",
        url: 'https://i0.hdslb.com/bfs/new_dyn/aa463f495b565290e259c4b3fe6ea270382382112.jpg@1920w_1080h_1e_1c.webp',
    },
    {
        id: 3,
        alt: "盛放的桃花",
        url: 'https://i0.hdslb.com/bfs/new_dyn/ced18873b7a98e12198037de10d2873c382382112.jpg@1920w_1080h_1e_1c.webp',
    },
    {
        id: 4,
        alt: "盛放的桃花",
        url: 'https://i0.hdslb.com/bfs/new_dyn/9551224478effb24897606e86afd4e52382382112.jpg@1920w_1080h_1e_1c.webp',
    },
    {
        id: 5,
        alt: "盛放的桃花",
        url: 'https://i0.hdslb.com/bfs/new_dyn/310e0a9301fa7458b29956534609885e382382112.jpg@1920w_1080h_1e_1c.webp',
    },
    {
        id: 6,
        alt: "盛放的桃花",
        url: 'https://i1.hdslb.com/bfs/new_dyn/b4d2393812b645bcc3efa327fb40334f382382112.jpg@1920w_1080h_1e_1c.webp',
    },

]
function handleClick(index) {
    let arr = []
    let right = sectionRef.value.splice(index - 1, sectionRef.value.length)
    let left = sectionRef.value.splice(0, index - 1)
    arr = [...right, ...left]
    sectionRef.value = arr
}
</script>
<template>
    <main class="container mx-auto px-4 py-16">
        <ul class='slider  rounded-md overflow-hidden'>
            <li class='item' @click.stop="handleClick(index)" v-for="(item, index) in sectionRef" :key="item.id">
                <img :src="item.url" :alt="item.alt" class="w-full h-full object-cover z-[-1] rounded-md cursor-pointer" />
            </li>
        </ul>
    </main>
</template>
<style scoped>
main {
    height: 80vh;
    display: grid;
    position: relative;
    width: 100%;
}

.slider {
    position: relative;
}

.item {
    /* filter: grayscale(1); */
    width: 192px;
    height: 108px;
    list-style-type: none;
    position: absolute;
    bottom: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
    transition: transform 0.1s, left 0.75s, bottom 0.75s, width 0.75s, height 0.75s;

    &:nth-child(1),
    &:nth-child(2) {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transform: none;
        border-radius: 0;
        box-shadow: none;
        opacity: 1;
    }

    &:nth-child(3) {
        left: 50%;
        top: unset;
        bottom:  12px;
    }

    &:nth-child(4) {
        left: calc(50% + 220px);
        top: unset;
        bottom:  12px;
    }

    &:nth-child(5) {
        left: calc(50% + 440px);
        top: unset;

        bottom:  12px;
    }

    &:nth-child(6) {
        left: calc(50% + 660px);
        opacity: 0;
        top: unset;
        bottom:  12px;
    }
}

.content {
    width: min(30vw, 400px);
    position: absolute;
    top: 50%;
    left: 3rem;
    transform: translateY(-50%);
    font: 400 0.85rem helvetica, sans-serif;
    color: white;
    text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: none;

    & .title {
        font-family: 'arial-black';
        text-transform: uppercase;
    }

    & .description {
        line-height: 1.7;
        margin: 1rem 0 1.5rem;
        font-size: 0.8rem;
    }

    & button {
        width: fit-content;
        background-color: rgba(0, 0, 0, 0.1);
        color: white;
        border: 2px solid white;
        border-radius: 0.25rem;
        padding: 0.75rem;
        cursor: pointer;
    }
}

.item:nth-of-type(2) .content {
    display: block;
    animation: show 0.75s ease-in-out 0.3s forwards;
}

@keyframes show {
    0% {
        filter: blur(5px);
        transform: translateY(calc(-50% + 75px));
    }

    100% {
        opacity: 1;
        filter: blur(0);
    }
}

.nav {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    user-select: none;

    & .btn {
        background-color: rgba(255, 255, 255, 0.5);
        color: rgba(0, 0, 0, 0.7);
        border: 2px solid rgba(0, 0, 0, 0.6);
        margin: 0 0.25rem;
        padding: 0.75rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }
}

@media (width > 650px) and (width < 900px) {
    .content {
        & .title {
            font-size: 1rem;
        }

        & .description {
            font-size: 0.7rem;
        }

        & button {
            font-size: 0.7rem;
        }
    }

    .item {
        width: 160px;
        height: 270px;

        &:nth-child(3) {
            left: 50%;
        }

        &:nth-child(4) {
            left: calc(50% + 170px);
        }

        &:nth-child(5) {
            left: calc(50% + 340px);
        }

        &:nth-child(6) {
            left: calc(50% + 510px);
            opacity: 0;
        }
    }
}

@media (width < 650px) {
    .content {
        & .title {
            font-size: 0.9rem;
        }

        & .description {
            font-size: 0.65rem;
        }

        & button {
            font-size: 0.7rem;
        }
    }

    .item {
        width: 130px;
        height: 220px;

        &:nth-child(3) {
            left: 50%;
        }

        &:nth-child(4) {
            left: calc(50% + 140px);
        }

        &:nth-child(5) {
            left: calc(50% + 280px);
        }

        &:nth-child(6) {
            left: calc(50% + 420px);
            opacity: 0;
        }
    }
}
</style>