#!/usr/bin/env node
import * as fs from 'fs-extra';
import * as path from 'path';
import * as inquirer from 'inquirer';

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates')).filter(s => s !== '.DS_Store');
interface questionType {
    name: string
    type: string
    message: string
    choices?: string[]
}

const QUESTIONS:questionType[] = [
    {
        name: 'template',
        type: 'list',
        message: 'What snippet would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'name',
        type: 'input',
        message: 'Snippet name:'
    }];

inquirer.prompt(QUESTIONS)
.then(answers => {
    copyTemplate(answers)
});


const copyTemplate = async ({name, template }: { name: string, template: string}) => {

    const CURRENT_ROUTE = process.cwd()
    switch(template) {
        case 'component':

            // Check if directory exists - create if nonexisting
            await fs.ensureDir(`${CURRENT_ROUTE}/components`);

            // Copy file
            const from = `${require.main?.path}/templates/component`
            const to = `${CURRENT_ROUTE}/components/${name}`
            await fs.copy(from, to);
            await fs.rename(`${to}/ComponentName.stories.tsx`, `${to}/${name}.stories.tsx`)

            fs.readFile(`${to}/index.tsx`, 'utf8', (err,data) => {
                const fileContents = data.replaceAll(`ComponentName`, name);
                fs.writeFile(`${to}/index.tsx`, fileContents, 'utf8', (err) => {
                    if (err) return console.log(err);
                });
            })

            return;

        case 'route':
            // Check if directory exists - create if nonexisting
            await fs.ensureDir(`${CURRENT_ROUTE}/routes`);
            // Copy file
            const fromRoute = `${require.main?.path}/templates/route`
            const toRoute = `${CURRENT_ROUTE}/routes/${name}`
            await fs.copy(fromRoute, toRoute);
            fs.readFile(`${toRoute}/index.tsx`, 'utf8', (err,data) => {
                const fileContents = data.replaceAll(`RouteName`, name);
                fs.writeFile(`${toRoute}/index.tsx`, fileContents, 'utf8', (err) => {
                    if (err) return console.log(err);
                });
            })
            return;
    }

}