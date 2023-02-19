import { Code2, Cog, Cpu, FileJson, Film, Joystick, MoreHorizontal, Terminal } from "lucide-react";
import { File } from "./File";
import { Folder } from "./Folder";

export function Explorer() {
    return (
        <div className="py-2 px-4 text-[#8F8CA8]">
            <strong className="font-medium text-xs pl-2 flex items-center justify-between">
                EXPLORER
                <MoreHorizontal size={16} strokeWidth={1.5} />
            </strong>

            <nav className="mt-4 flex flex-col">
                <Folder defaultOpen title="Visual Studio Code">
                    <File href="/settings/vscode/settings">
                        <FileJson size={16} />
                        settings.json
                    </File>
                    <File href="/settings/vscode/extensions">
                        <FileJson size={16} />
                        extensions.json
                    </File>
                </Folder>

                <Folder title="Terminal">
                    <File href="/settings/terminal/general">
                        <Terminal size={16} />
                        General
                    </File>
                    <File href="/settings/terminal/zsh">
                        <Cog size={16} />
                        config.zsh
                    </File>
                </Folder>

                <Folder title="Others">
                    <File href="/settings/others/my-setup">
                        <Cpu size={16} />
                        my.setup
                    </File>
                </Folder>
            </nav>
        </div>
    )
}