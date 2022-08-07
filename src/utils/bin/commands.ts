// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const gui = async (args: string[]): Promise<string> => {
  window.open(`${config.website}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. ${config.summary}

Skills: ${config.skills.languages},${config.skills.framework},${config.skills.data}

More about me:
'summary' - short summary.
'resume' - my latest resume.
'github' - my github
'email' - to open email client with my email
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${config.name}`);
  return `Searching google for ${config.name}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `haha, nice try but this is not real thing ;)`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you share the site.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim' is too good. <3`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use nvim. ;)`;
};

export const code  = async (args?: string[]): Promise<string> => {
  return `Really! Wanna you code on a browser? What's wrong with you all? `;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `haha, Nice try but this is not a real thing.... you know`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
:'######:::::'###::::'##::: ##::::'###::::'########:'##::::'##::::::'########::'########:'##::::'##:
'##... ##:::'## ##::: ###:: ##:::'## ##:::... ##..:: ##:::: ##:::::: ##.... ##: ##.....:: ##:::: ##:
 ##:::..:::'##:. ##:: ####: ##::'##:. ##::::: ##:::: ##:::: ##:::::: ##:::: ##: ##::::::: ##:::: ##:
. ######::'##:::. ##: ## ## ##:'##:::. ##:::: ##:::: #########:::::: ##:::: ##: ######::: ##:::: ##:
:..... ##: #########: ##. ####: #########:::: ##:::: ##.... ##:::::: ##:::: ##: ##...::::. ##:: ##::
'##::: ##: ##.... ##: ##:. ###: ##.... ##:::: ##:::: ##:::: ##:'###: ##:::: ##: ##::::::::. ## ##:::
. ######:: ##:::: ##: ##::. ##: ##:::: ##:::: ##:::: ##:::: ##: ###: ########:: ########:::. ###::::
:......:::..:::::..::..::::..::..:::::..:::::..:::::..:::::..::...::........:::........:::::...:::::
Welcome to my personal website, you can interact with the site with bellow commands

Type 'summary' to display contacts info and summary .
Type 'linkedin' to open my LinkedIn profile.
Type 'resume' to open my resume.
Type 'gui' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.website}" target="_blank">here</a></u> to visit normal website (if you are sick of this black screen).
Type 'help' to see the list of available commands.
`;
};
