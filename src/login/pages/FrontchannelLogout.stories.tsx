import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "frontchannel-logout.ftl" });

const meta = {
    title: "login/frontchannel-logout.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
export const Arabic: Story = {
    render: () => <KcPageStory 
        kcContext={{
            locale: {
                currentLanguageTag: "ar",
                rtl: true
            }
        }}
    />
};
export const French: Story = {
    render: () => <KcPageStory 
        kcContext={{
            locale: {
                currentLanguageTag: "fr",
            }
        }}
    />
};
export const WithoutRedirectUrl: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                logout: {
                    clients: []
                }
            }}
        />
    )
};
