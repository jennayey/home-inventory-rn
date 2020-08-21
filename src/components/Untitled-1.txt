<ThemeContext.Consumer>
{currentTheme => (<UpdateThemeContext.Consumer>
  {({ toggleDarkTheme }) => (
    <Switch
      trackColor={{ false: '#C4C4C4', true: '#F25A29' }}
      thumbColor={
        this.state.darkMode ? '#ECECEC' : '#ECECEC'
      }
      value={currentTheme}
      // onValueChange={(darkMode) => { this.setState({ darkMode }); toggleDarkTheme() }}
      onValueChange={ toggleDarkTheme }

    />

  )}
</UpdateThemeContext.Consumer>)

}

</ThemeContext.ThemeContext.Consumer>