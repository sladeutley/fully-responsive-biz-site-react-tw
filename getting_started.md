1. sign up with hostinger for hosting after project is done (around 3:42 to 8:15 in his video for explanation - https://www.youtube.com/watch?v=_oO4Qi5aVZs&list=PLi0zmCh0uKC6x-ut9DzhSiTD2hqUU1I0l&index=79). I guess though we could also use netlify like did on youtube project, in which case we'll just do at end. And i guess could also do hostinger at end too.
2. in terminal, go to container folder you want project to be in
3. We're using vite instead of npx create react app in this build. In terminal, type 'npm create vite@latest'. Follow prompts - i did framework - react, variant - javascript, although it seems like swc is a good thing (maybe for another project)
4. in terminal, cd into project
5. in terminal, 'npm install'
6. Install Dependencies (only tailwind using postcss - NOTE***WE ARE NOT USING Tailwind CLI which is default - not sure what difference this makes) - go to their documentation for up to date installation, but as of this moment it's, in terminal, type 'npm install -D tailwindcss postcss autoprefixer'. Next, in terminal, type 'npx tailwindcss init -p'
7. AFTER install dependencies, set up github repo and use your notes in github folder to connect it to this project
8. Follow github commits from this point