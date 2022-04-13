// Copyright © 2018 Chef Software

// chef-server-ctl is a FAKE version of Chef Server (omnibus)'s management CLI
// tool. The fake version exists so we can test and demo a1->a2 upgrade
// functionality without setting up a1 over and over. We can also add hooks via
// environment variables to make certain tasks fail which lets us demo the
// failure cases. This is different than the `chef-server-ctl` in the
// automate-cs-nginx package, which provides non-stubbed management
// functionality for the a2 Chef Server integration
package main

import (
	"os"

	"github.com/spf13/cobra"
)

// RootCmd represents the base command when called without any subcommands
var RootCmd = &cobra.Command{
	Use:          "chef-server-ctl",
	Short:        "TEST DOUBLE for `chef-server-ctl`",
	Long:         "TEST DOUBLE for `chef-server-ctl` with configurable failure modes. For testing and demos only",
	SilenceUsage: true,
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	if err := RootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

func main() {
	Execute()
}
