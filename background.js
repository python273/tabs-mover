async function handleClick(tab) {
    const currentTabUrl = new URL(tab.url);

    const tabs = await browser.tabs.query({
        currentWindow: true,
        url: `*://*.${currentTabUrl.hostname}/*`
    });

    browser.tabs.move(tabs.map(t => t.id), {index: -1});
}

browser.pageAction.onClicked.addListener(handleClick);
