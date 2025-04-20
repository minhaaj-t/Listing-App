<template>
    <div>
       <!-- First Div -->

        <div style="background-color: gainsboro;">
            <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/About">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog/Contact">Contact</NuxtLink>
            </li>
        </ul>
        </div>

        <!-- Second Div -->

        <div>
            <slot>

            </slot>
        </div>

        <!-- Third Div -->
        <div style="background-color: gainsboro;">
            <p>Footer</p>
            <p>Copyright 2023</p>
            <p>All rights reserved</p>
            <p>Contact us at:</p>
                <a href="mailto:minhaj@gmail.com"></a>
                <p>
                    <a href="tel:+1234567890">+1234567890</a>
                </p>
                <p>123 Main St, City, Country</p>
                <p>123 Main St, City, Country</p>
                <p>123 Main St, City, Country</p>

                </div>               

    </div>
</template>